const express = require('express');
const app = express();

const adminRoutes = require('./adminRoutes');

//define middleware to handle authentication for admin routes
const authenticateAdmin = (req, res, next) => {
  req.user = {
    isAdmin: true
  };
  
  if(req.user && req.user.isAdmin) {
    return next();
  } else {
    return res.status(403).send('Unauthorized');
  };
};

app.use('/admin', authenticateAdmin, adminRoutes);

//define middleware for customer authentication
const authenticateCustomer = (req, res, next) => {
  req.user = {
    isCustomer: true
  };
  
  if(req.user && req.user.isCustomer){
    return next();
  } else {
    return res.status(401).send('Please login');
  };
};

//define routes for customers
app.get('/', (req, res) => {
  res.send('Welcome To Ecommerce Site');
});

app.get('/dashboard', authenticateCustomer, (req, res) => {
  res.send('Welcome to Dashboard user');
});

app.get('/products', authenticateCustomer, (req, res) => {
  res.send('Products Page')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
