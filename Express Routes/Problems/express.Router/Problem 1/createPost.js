const express = require('express');
const router = express.Router();

global.posts = [];

router.post('/', (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = { title, content };
    posts.push(newPost);

    res.json({message: 'New post added successfully', posts: newPost});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Error adding post'});
  };
});

module.exports = router;
