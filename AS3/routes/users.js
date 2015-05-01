var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	var users = req.app.get('users');
	  res.render('users', { title: 'Chat Room',description: 'This is the list of users connected: '+ users });
});

module.exports = router;

