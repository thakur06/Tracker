const User = require('../models/user');

// Save or update user details from Google Sign-In
exports.saveOrUpdateUser = async (req, res) => {
  try {
    const { uid, name, email, photoURL, provider } = req.body;
    if (!uid || !email) {
      return res.status(400).json({ error: 'Missing uid or email' });
    }
    const user = await User.findOneAndUpdate(
      { uid },
      { name, email, photoURL, provider },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user' });
  }
}; 