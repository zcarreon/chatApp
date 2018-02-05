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

io.on('connection', socket => {
  console.log('A user has connected.');

  io.emit('chat message', { for: 'everyone', message : `${socket.id} is here.`});

  // Handle messages sent from the client
  socket.on('chat message', msg => {
    io.emit('chat message', { for: 'everyone', message : msg});
  })

  socket.on('disconnect', () => {
    console.log('A user has disconnected.');

    io.emit('disconnect message', `${socket.id} has left.`);
  });
});
