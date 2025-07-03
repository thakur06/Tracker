const gmail = require('../utils/gmailService');
const Order = require('../models/Order');
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
      orderData.userEmail = "sample@example.com"; // Update this after integrating auth

      const existing = await Order.findOne({ orderId: orderData.orderId });
      if (!existing) {
        const newOrder = new Order(orderData);
        await newOrder.save();
      }

      orders.push(orderData);
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};
