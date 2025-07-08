const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gmailRoutes = require('./routes/gmailRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/gmail', gmailRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
