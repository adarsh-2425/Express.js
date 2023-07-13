const express = require('express');
const router = express.Router();
const messages = require('./message_DB');

//render get messages
router.get('/', (req, res) => {
  res.render('show_messages', { messages });
});

//export module
module.exports = router;
