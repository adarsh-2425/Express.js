const express = require('express');
const router  = express.Router();
const messages = require('./message_DB');

// render create messages pug
router.get('/', (req, res) => {
  res.render('create_messages');
});

// create message route handler
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const id = messages.length + 1;

  const newMessage = { id, name, email, message };
  messages.push(newMessage);

  res.redirect('/messages');
});

module.exports = router;
