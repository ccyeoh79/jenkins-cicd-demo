// Write hello world API in nodejs 
const express = require('express');
const app = express();
const port = 3000;

// Define the route for the Hello World API
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Hello World API is running on http://localhost:${port}`);
});
