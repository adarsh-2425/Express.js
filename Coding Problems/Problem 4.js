/*Implement a middleware function in Express.js that logs the timestamp of every incoming request along with the request method and path.*/

const express = require('express');
const app = express();

// Custom middleware to log request information
const logRequest = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, path } = req;
  console.log(`[${timestamp}] ${method} ${path}`);
  next();
}

// Use the custom middleware in your Express app
app.use(logRequest);

app.listen(3000, () => {
  console.log('server running on port 3000')
});
