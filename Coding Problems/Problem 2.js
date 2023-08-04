/*Create an Express.js route that accepts a query parameter name and responds with a greeting message like "Hello, [name]!".*/

// Import the express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Route with parameter 'name'
app.get('/:name', (req, res) => {
  try {
    // Extract the value of the 'name' parameter from the URL using req.params.name
    const name = req.params.name;

    // Send a response to the client with the dynamically generated message
    res.send(`Hello, ${name}`);
  } catch (err) {
    // If an error occurs, log the error message to the console
    console.log(err.message);
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
