var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });

router.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users){
  	res.send(users);
  });
});

module.exports = router;
