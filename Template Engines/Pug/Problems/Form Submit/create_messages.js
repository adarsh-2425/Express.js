const express = require('express');
const app = express();
const router  = express.Router();

//create message
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const id = messages.length + 1;

  const newMessage = { id, name, email, message };
  messages.push(newMessage);

  res.send('success');
});

module.exports = router;
