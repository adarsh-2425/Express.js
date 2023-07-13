//import axios
const axios = require('axios');

//jsonplaceholder api
const API_URI = 'https://jsonplaceholder.typicode.com/posts';

//getPost from api
const getPosts = async (req, res) => {
  try {
    const response = await axios.get(API_URI);
    const posts = response.data; // Accessing the already parsed JSON data
    posts.forEach(post => console.log(post.title));
  } catch (err) {
    console.log(err);
  }
};

getPosts();
