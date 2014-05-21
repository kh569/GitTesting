var express = require('express');
var router = express.Router();

/* GET home page. */
// original code
// router.get('/', function(req, res) {
//   res.render('index', { title: 'My first Node.Js App' });
// });

// EXAMPLE:
router.get('/', function(req, res){
	// SEND EXAMPLE
	// res.send({a: 200});	// res = respond, can send text or jason, number
	// res.send(404);
	// res.send({
	// 	users: ['Michael', "Hung"]
	// });

	/* RENDER EXAMPLE */
	res.render('index', { 
		title: 'My first Node.Js App',
		name: 'Michael Hung',
		company: 'Google',
		school: 'Cornell'

	});// render template, to look at the file

	console.log(req.query);
	// type this in browser: http://localhost:3000/?company=Apple

});

router.get('/api/:id', function(req, res){
	console.log(req.params);
	res.send(req.params.id, 200);
});

// this is the return value of what this file going to be
module.exports = router;
