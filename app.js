const express = require('express'); // just like an include or require with php
const app = express(); // create an inctance of our application via simpleExample

app.use(express.static('public'));

// Set up routes
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/portfolio'));

app.listen(3000, () => {
  console.log('app running on port 3000!');
});
