
// INDEX FILE FROM AUTH0
// NEED TO DELETE OR RENAME 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Auth0 Webapp Nodejs' });
});

module.exports = router;
