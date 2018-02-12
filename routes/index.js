const express = require('express'); // same as a php include
const router = express.Router();
const path = require('path');

// This is a route. This points at the home page / root.
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname , '../views/index.html'))
});

module.exports = router;
