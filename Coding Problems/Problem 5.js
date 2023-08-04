//Create an Express.js route that serves a static HTML file located in a directory called "public".

const express = require('express');
const app = express();

//using middleware express.static()
app.use(express.static('public'));

//sending static html page from public folder
app.get('/', (req, res) => {
  res.send('index')
});

app.listen(3000, () => {
  console.log('server running on port 3000')
});
