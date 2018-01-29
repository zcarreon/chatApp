const express = require('express'); // same as a php include
const router = express.Router();
const path = require('path');

// This is a contact route
router.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/contact.html'));
});

module.exports = router;
