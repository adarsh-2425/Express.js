const express = require('express');
const app = express();
const path = require('path');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello from Pug!',
    h1: 'Hello World!'
  });
});

app.get('/article/add', (req, res) => {
  res.render('add_article', {
    h1: 'Add Article'
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
