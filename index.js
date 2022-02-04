//importing express
const express = require('express');
const app = express();
//importing body parser
const bodyParser = require("body-parser");

//connecting with sql database
const connection = require('./database/database.js');
const Topics = require('./database/Topics.js');
const Answers = require('./database/Answers.js');

connection
	.authenticate()

	.then(() => {
		console.log("Conexão feita com o banco de dados.");
	})

	.catch((msgErro)=>{
		console.log(msgErro);
	});

//setting ejs as a view engine
app.set('view engine', 'ejs');

//setting the directory of static files
app.use(express.static('public'));

//setting the requisition data
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

//setting routes
app.use('/', require('./routes/routes.js'));


//running server
app.listen(8080, ()=>{console.log("Server running!")});