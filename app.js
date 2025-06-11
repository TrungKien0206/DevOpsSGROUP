const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Middlewares (nếu sau này bạn dùng body-parser, cors, etc.)
app.use(express.json()); // Cho phép nhận JSON từ client

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from EC2 with MongoDB!');
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
