const express = require('express');
const router = express.Router();

global.posts = [];

router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;
