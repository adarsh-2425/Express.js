app.use(function(req, res, next) {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.post('/login', function(req, res, next) {
  // validate user input
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing username or password');
  } else {
    next();
  }
});
