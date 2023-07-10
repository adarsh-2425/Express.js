# Problem: 
You are building a web application that allows users to create and view blog posts. You want to implement two endpoints:

1. A POST endpoint for creating new blog posts. This endpoint should accept JSON data containing the title and content of the new blog post, and should add the new post to a list of existing posts.

2. A GET endpoint for fetching all existing blog posts. This endpoint should return a JSON array of all blog posts, including their titles and content.

Write a Node.js and Express.js application that implements these two endpoints using app.route(). The application should store the list of blog posts in memory (i.e., not in a database), and the list should be initialized to an empty array when the application starts.

Your solution should include the following:

1. A route handler function for the POST endpoint that extracts the title and content of the new blog post from the request body, creates a new blog post object, adds it to the list of posts, and sends a JSON response indicating that the post was added successfully.

2. A route handler function for the GET endpoint that returns a JSON response containing the list of all blog posts.
