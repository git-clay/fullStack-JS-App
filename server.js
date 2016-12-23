var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	app			= express(),
	db 			= require('./models');


	app.use(express.static(__dirname + '/public'));

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	app.use(function(req, res, next) { // fixes allow origin permission error
	 res.header("Access-Control-Allow-Origin", "*");
	 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
	});


console.log('server up');

app.get('/api/cards', function card_index(req,res){
	// res.json(questionsList);  //used before the db was created
	db.Card.find()
	.populate('album')
	.exec(function(err,card){
		res.json(card);
	});
});

app.post('api/cards', function(req,res){
	var newCard = new db.Card({
		question: req.body.question
	});
	newCard.save(function(err,album){
		console('new card', album,'saved');
	});
});


  // listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});