const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use the body-parser middleware to parse JSON-encoded request bodies
app.use(bodyParser.json());

// Define an array of posts with title and content
let posts = [];

// Define a route handler for get and post requests to /posts using app.route
app.route('/posts')
  .get((req, res) => {
    res.json(posts);
  })

  .post((req, res) => {
    try {
      const { title, content } = req.body;
      const newPost = { title, content};
      console.log(`Title: ${title}, Content: ${content}`);
      posts.push(newPost);

      res.json({message: 'Post added successfully', post: newPost})
    } catch (err) {
      console.log(err);
      res.status(500).json({message: 'Error adding post'});
    };
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
