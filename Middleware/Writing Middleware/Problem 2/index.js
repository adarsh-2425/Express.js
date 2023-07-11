const express = require('express');
const app = express();

//middleware function
const myMiddleware = (req, res, next) => {
  req.newProperty = 'New Property is here';
  next();
}

app.use(myMiddleware);

app.get('/', (req, res) => {
  console.log(req.newProperty);
  res.send('Hello World');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
