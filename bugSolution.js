const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use a different port or environment variable

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    if (err.code === 'EADDRINUSE') {
      console.error('Port ' + port + ' is already in use.');
    }
  } else {
    console.log('Server listening on port ' + port);
  }
});