const express = require('express');
const router = express.Router();

//define admin routes
router.get('/dashboard', (req, res) => {
  res.send('Welcome to Admin Dashboard!');
});

router.get('/products', (req, res) => {
  res.send('Welcome to Products Management Page!');
});

module.exports = router;
