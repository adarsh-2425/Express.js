const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (req,res) => {
  res.send('Got a PUT request');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
