var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({status: true, response: 'Hello node'});
})

router.get('/findUser', (req, res) => {
  res.send({status: true, response: 'Believe'});
})

router.get('/outTime', (req, res) => {
  res.send({status: true, response: 'OUT time recorded'});
})

module.exports = router;
