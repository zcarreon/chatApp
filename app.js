const express = require('express');
const app = express();

// This is a route. This points at the home page / root.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// This is a contact route
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// This is a portfolio route
app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/portfolio.html');
});

app.listen(3000, () => {
  console.log('app running on port 3000!');
});
