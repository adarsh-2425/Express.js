/*Create an Express.js route that accepts a POST request with a JSON payload containing two numbers, and responds with the sum of those numbers as a JSON object.*/

const express = require('express');
const app = express();

//to parse json data from req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('send numbers')
})

//route
app.post('/sum', async (req, res) => {
  const { num1, num2 } = await req.body;
  const sum = num1 + num2;

  res.send(`sum is ${sum}`);
});

app.listen(3000, () => {
  console.log('server running on port 3000')
});
