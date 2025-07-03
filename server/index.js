const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gmailRoutes = require('./routes/gmailRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/gmail', gmailRoutes);

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
