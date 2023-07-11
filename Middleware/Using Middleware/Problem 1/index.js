const express = require('express');
const app = express();

//Authentication middleware
const authenticateUser = (req, res, next) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return next();
  } else {
    return res.send('Please Login!')
  }
}

//Authorization Middleware
const authorizeAdmin = (req, res, next) => {
  const isAdmin = false;

  if (isAdmin) {
    return next();
  } else {
    return res.status(403).send('Access Denied');
  }
}

//admin
app.get('/admin', authenticateUser, authorizeAdmin, (req,res) => {
  res.send('Welcome Admin!!!');
});

//user
app.get('/user', authenticateUser, (req, res) => {
  const username = null;
  const name = username || 'Stranger';
  res.send(`Hello, ${name}`);;
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
