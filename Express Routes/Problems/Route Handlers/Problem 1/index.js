const express = require('express');
const app = express();

//reviews
const reviews = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4, review: 'A great American classic.' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 5, review: 'A masterpiece of American literature.' },
  { id: 3, title: '1984', author: 'George Orwell', rating: 4, review: 'A chilling dystopian novel.' }
];

// Define a route handler for GET requests to "/reviews"
app.get('/reviews', (req,res) => {
  const filteredReviews = reviews.map(review => ({
    id: review.id,
    title: review.title,
    author: review.author,
    rating: review.rating
  }));
  res.json(filteredReviews);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
