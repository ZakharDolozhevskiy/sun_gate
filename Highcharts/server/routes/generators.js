const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('indicators', { title: 'Indicators' });
});

module.exports = router;
