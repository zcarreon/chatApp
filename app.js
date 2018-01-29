const express = require('express'); // just like an include or require with php
const app = express(); // create an inctance of our application via simpleExpress
const io = require('socket.io')();

app.use(express.static('public'));

// Set up routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

const server = app.listen(3000, () => {
  console.log('App running on port 3000.');
});

io.attach(server);

io.on('connection', () => {
  console.log('A user has connected.');
  io.emit('connectMsg', { for: 'everyone', msg : '${socket.id} is here.'});

  socket.on('disconnect', () => {
    console.log('A user has disconnected.');
  });
});
