## Problem:
You are building a web application that allows users to create and view blog posts. You want to organize your routes using express.Router(),
creating separate modules for handling GET and POST requests to the /posts endpoint.  

Write a Node.js and Express.js application that implements these two modules using express.Router(). The application should store the list of blog posts in 
memory (i.e., not in a database), and the list should be initialized to an empty array when the application starts.  

Your solution should include the following:  

1. A GET module that exports a router object with a route handler function for fetching all existing blog posts. This handler should return a JSON array of all blog posts, including their titles and content.

2. A POST module that exports a router object with a route handler function for creating new blog posts. This handler should accept JSON data containing the title and content of the new blog post, and should add the new post to a list of existing posts. 
The handler should then send a JSON response indicating that the post was added successfully.
