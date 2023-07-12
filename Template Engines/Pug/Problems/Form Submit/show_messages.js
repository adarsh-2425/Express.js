const express = require('express');
const router = express.Router();

//get messages
router.get('/', (req, res) => {
  //res.render('messages', { messages });
  res.send(messages);
});

//export module
module.exports = router;
