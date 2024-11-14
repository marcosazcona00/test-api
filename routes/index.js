const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ status: 200, ok: true });
});

router.get('/ping', function(req, res, next) {
  res.send('pong');
});

router.get('/ping/pepe', function(req, res, next) {
  res.send('pong pepe');
});

module.exports = router;

