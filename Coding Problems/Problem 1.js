/*Create a simple Express.js server that listens on port 3000 and responds with "Hello, World!" when you visit the root path (/) in your browser.*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello World!')
});

app.listen(3000, () => {
  console.log('server running on port 3000')
});
