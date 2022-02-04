const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Topics = require('../database/Topics.js');
const Answers = require('../database/Answers.js');


app.get('/', (req,res)=>{
	Topics.findAll({raw:true, order:[['id', 'DESC']]}).then(topics=>{
		res.render('index.ejs',{
			topics: topics
		});
	});
});

app.get('/createtopic', (req,res)=>{
	res.render('createtopic.ejs', {

	});
});

app.post('/savetopic', (req,res)=>{
	let title = req.body.title;
	let description = req.body.description;
	Topics.create({
		title: title,
		description: description
	}).then(()=>{
		res.redirect('/');
	});
});

app.get('/topic/:id', (req,res)=>{
	id = req.params.id;
	Topics.findOne({
		where: {id: id}
	}).then(topic=>{
		if(topic != undefined){
			Answers.findAll({
				where: {topicId: topic.id},
				order: [['id', 'DESC']]
			}).then(answers=>{
				res.render('topic.ejs', {
					topic: topic,
					answers: answers
				});
			});
		}else{
			res.redirect('/'); //404
		}
	})
});

app.post('/answer', (req,res)=>{
	var content = req.body.content;
	var topicId = req.body.topicid;
	Answers.create({
		content: content,
		topicId: topicId
	}).then(()=>{
		res.redirect(`topic/${topicId}`);
	})
});
module.exports = app;