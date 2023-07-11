const express = require('express');
const app = express();

//middleware function 'logger'
const logger = (req, res, next) => {
  console.log('special LOGGED');
  next();
}

app.get('/special', logger, (req, res) => {
  res.send('Hello World')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
