const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//products array
global.products = [
  {name: 'Apple', price: 20}
];

//home route
app.get('/', (req, res) => {
  res.render('index', { products : products });
});

//add products
app.post('/', (req, res) => {
  const { name, price } = req.body;
  const id = products.length + 1;
  const newProduct = { id, name, price}
  
  console.log(newProduct);
  products.push(newProduct);
  res.redirect('/');
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
