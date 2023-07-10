Suppose you are building a web application that allows users to create and view book reviews. You need to create a route handler that will handle HTTP GET requests to the "/reviews" endpoint, and return a list of all book reviews in your application.

Write a route handler function in Node.js that:

1. Retrieves an array of book reviews from memory. You can assume that the reviews are stored as an array of objects, where each object represents a single review and includes the review's ID, title, author, rating, and review text.
2. Formats the reviews as an array of objects, where each object includes only the review's ID, title, author, and rating.
3. Sends the formatted reviews as a JSON response to the client.
