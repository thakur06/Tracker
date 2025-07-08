const { google } = require('googleapis');
const User = require('../models/user');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

exports.googleAuth = (req, res) => {
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/gmail.readonly'
  ];
  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes,
  });
  res.redirect(url);
};

exports.googleAuthCallback = async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // Get user info
  const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
  const { data } = await oauth2.userinfo.get();

  // Save tokens and user info in DB
  await User.findOneAndUpdate(
    { email: data.email },
    {
      name: data.name,
      email: data.email,
      photoURL: data.picture,
      provider: 'google',
      googleTokens: tokens,
    },
    { upsert: true, new: true }
  );

  // Redirect to frontend (you can pass a token or session info here)
  res.redirect('http://localhost:5173/orders'); // Change to your frontend route
}; 