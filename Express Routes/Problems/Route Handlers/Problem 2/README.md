Suppose you are building a web application that allows users to create and view job listings. You need to create a route handler that will handle HTTP POST requests to the "/jobs" endpoint, and add a new job listing to your application.

Write a route handler function in Node.js that:

1. Parses the incoming request body as JSON to extract the job listing data. You can assume that the request body will include a JSON object with the following properties: title, company, location, description, and salary.
2. Generates a unique ID for the new job listing.
3. Adds the new job listing to an array of job listings in memory. You can assume that the job listings are stored as an array of objects, where each object represents a single job listing and includes the job's ID, title, company, location, description, and salary.
4. Sends a JSON response back to the client indicating that the job listing was successfully added.
