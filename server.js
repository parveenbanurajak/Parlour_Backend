const express = require('express');
const dotenv = require('dotenv');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Default to port 5000 if not specified

app.get('/', (req, res) => {
  res.send('Welcome to Parlour Backend');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
