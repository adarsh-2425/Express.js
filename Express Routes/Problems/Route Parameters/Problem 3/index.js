const express = require('express');
const app = express();

//flight data
const flights = [
  {id: 1, from: 'TRV', to: 'CLB', time: '10:15'},
  {id: 2, from: 'LAX', to: 'SFO', time: '22.00'},
  {id: 3, from: 'MLE', to: 'LAX', time: '15:00'}
]
//Route Parameter
app.get('/flights/:from-:to', (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const results = flights.filter(flight => flight.from === from && flight.to === to);

  if (results) {
    res.json(results);
  } else {
    res.status(404).send('Flight Not Found');
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
