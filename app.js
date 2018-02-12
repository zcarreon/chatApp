<<<<<<< HEAD
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
=======
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

var heads = 0;

io.on('connection', socket => {
  console.log('A user has connected.');

  socket.broadcast.emit('chat message', { for: 'everyone', message : `${socket.id} is here.`});

  // Displays how many people are connected.
  ++heads;
  io.emit('chat message', { for: 'everyone', message : `There are ` + heads + ` people in this chat room.`});

  // Handle messages sent from the client
  socket.on('chat message', msg => {
    io.emit('chat message', { for: 'everyone', message : msg});
  })

  socket.on('disconnect', () => {
    console.log('A user has disconnected.');

    io.emit('disconnect message', `${socket.id} has left.`);

    // Displays how many people are connected.
    --heads;
    io.emit('chat message', { for: 'everyone', message : `There are ` + heads + ` people in this chat room.`});
  });
>>>>>>> dev.zpc.addingMoreStuff
});
