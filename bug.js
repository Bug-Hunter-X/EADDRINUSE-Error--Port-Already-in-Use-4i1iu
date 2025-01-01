const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Uncommon error:  If the port 3000 is already in use by another process, the server will fail to start and you will encounter an error message similar to 'EADDRINUSE'. This is less obvious than syntax errors and might take time to debug