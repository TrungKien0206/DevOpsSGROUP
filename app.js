const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

app.use(express.json()); 

connectDB();

app.get('/', (req, res) => {
  res.send('Hello 1 ngày vui :)))');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
