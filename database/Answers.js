const sequelize = require('sequelize');
const connection = require('./database.js');

const Answers = connection.define('answers', {
	content:{
		type: sequelize.TEXT,
		allowNull: false
	},

	topicId:{
		type: sequelize.INTEGER,
		allowNull: false
	}
});

Answers.sync({force:false});
module.exports = Answers;