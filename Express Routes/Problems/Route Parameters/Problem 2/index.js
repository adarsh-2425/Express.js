const express = require('express');
const app = express();

//datas
const data = [
  {id: 1, name: 'John', age: 25},
  {id: 2, name: 'Hari', age:  30},
  {id: 3, name: 'Maya', age: 18}
]
//Route Parameter
app.get('/data/:id', (req, res) =>  {
  const id = parseInt(req.params.id);
  const result = data.find(item => item.id === id);
  if (result) {
    res.json(result);
  } 
  else {
    res.status(404).send('Not Found');
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
