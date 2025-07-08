const { google } = require('googleapis');
const User = require('../models/user');
const Order = require('../models/orders');
const cheerio = require('cheerio');

const parseAmazon = (body) => {
  const $ = cheerio.load(body);
  const orderId = $('b:contains("Order #")').text().split("#")[1]?.trim();
  const delivery = $("td:contains('Arriving'), td:contains('Delivered')").first().text();
  return {
    platform: "Amazon",
    orderId,
    deliveryDate: delivery || "N/A",
    items: [{ name: "Amazon Item", price: 0 }],
  };
};

exports.fetchOrders = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    if (!userEmail) {
      return res.status(400).json({ error: 'Missing userEmail' });
    }
    // Only fetch orders for this user from the database
    const orders = await Order.find({ userEmail });
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};

exports.fetchOrdersFromGmail = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    if (!userEmail) {
      return res.status(400).json({ error: 'Missing userEmail' });
    }
    const user = await User.findOne({ email: userEmail });
    if (!user || !user.googleTokens) {
      return res.status(404).json({ error: 'User or Gmail tokens not found' });
    }
    // Set up OAuth2 client with user's tokens
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    oAuth2Client.setCredentials(user.googleTokens);
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // Fetch Amazon order emails
    const q = 'from:amazon.in subject:"Your Amazon.in order"';
    const response = await gmail.users.messages.list({
      userId: 'me',
      q,
      maxResults: 5,
    });
    const messages = response.data.messages || [];
    const orders = [];
    for (let msg of messages) {
      const message = await gmail.users.messages.get({
        userId: 'me',
        id: msg.id,
        format: 'full',
      });
      const parts = message.data.payload.parts || [];
      const htmlPart = parts.find(part => part.mimeType === 'text/html');
      if (!htmlPart) continue;
      const buff = Buffer.from(htmlPart.body.data, 'base64');
      const body = buff.toString();
      const orderData = parseAmazon(body);
      orderData.rawEmailId = msg.id;
      orderData.status = "Pending";
      orderData.userEmail = userEmail;
      // Save to DB if not already present
      const existing = await Order.findOne({ orderId: orderData.orderId, userEmail });
      if (!existing && orderData.orderId) {
        const newOrder = new Order(orderData);
        await newOrder.save();
      }
      orders.push(orderData);
    }
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching Gmail orders:", error.message);
    res.status(500).json({ error: "Failed to fetch orders from Gmail." });
  }
};
