var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({status: true, response: 'Hello node'});
})

module.exports = router;
