const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const getPostsRoute = require('./getPost');
const createPostsRoute = require('./createPost');

app.use('/posts', getPostsRoute);
app.use('/posts', createPostsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
