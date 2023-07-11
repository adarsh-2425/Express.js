const express = require('express');
const app = express();

//error handling middleware
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
};

app.use(errorMiddleware);

app.get('/', (req, res, next) => {
 //simulate an error
  const err = new Error('Something went wrong');
  next(err);
}, (req, res) => {
   // This code will only be executed if there is no error
  res.send('Hello World!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
