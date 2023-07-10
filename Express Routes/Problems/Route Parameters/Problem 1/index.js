const express = require('express');
const app = express();

//Route Parameter
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
