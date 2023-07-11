const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

//defining route
app.get('/', (req, res) => {
  //get cookie value
  const username = req.cookies.username;

  //set a cookie value
  res.cookie('username', 'John');

  res.send(`Hello, ${username || 'guest'}!`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
