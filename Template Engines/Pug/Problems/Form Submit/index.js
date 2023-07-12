const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const show_messages = require('./show_messages');
const create_messages = require('./create_messages');

//view template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//bodyparser middleware should be in main js file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//messages array
global.messages = [];

app.use('/messages', show_messages);
app.use('/messages/add', create_messages);

//server running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
