var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat Room',description: 'This is a chat to discuss with your friends. You can like what they said by just clicking on the thumbs up next to the Send button.\n Please enter a username to get access to the chat room !' });
});

router.post('/homePage', function(req, res, next) {
  var users = req.app.get('users');
  var exist = false;
  for (var i=0;i<users.length;i++) {
    if(users[i]==req.body.username){
      exist = true;
    } 
  }
  if(exist){
      res.render('index', { title: 'Chat Room',description: 'This is a chat to discuss with your friends. You can like what they said by just clicking on the thumbs up next to the Send button.\n Please enter a username to get access to the chat room !',alert:' Username already exists !!' });
  }else{
      res.render('homePage', { title: 'Chat Room', user: req.body.username});
  }
});



module.exports = router;
