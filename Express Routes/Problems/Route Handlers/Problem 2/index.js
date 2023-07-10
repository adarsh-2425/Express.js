const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use the body-parser middleware to parse JSON-encoded request bodies
app.use(bodyParser.json());

// Define an array of job listings
let jobListings = [
  { id: 1, title: 'Front-End Developer', company: 'Acme Inc.', location: 'San Francisco, CA', 
    description: 'We are seeking a talented front-end developer to join our team.', salary: 80000 },
  { id: 2, title: 'Back-End Developer', company: 'Widget Co.', location: 'New York, NY', 
    description: 'We are looking for a skilled back-end developer to help us build our platform.', salary: 90000 }
];

// Define a route handler for POST requests to "/jobs"
app.post('/jobs', (req, res) => {
  try {
    const { title, company, location, description, salary } = req.body;
    const id = jobListings.length + 1;

    const newJobListings = { id, title, company, location, description, salary};

    jobListings.push(newJobListings);
    
    res.json({message: 'Job listing added successfully', jobListing: newJobListings});
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error adding job listing'});
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
