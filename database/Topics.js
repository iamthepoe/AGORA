const sequelize = require('sequelize');
const connection = require('./database.js');

const Topics = connection.define('topics', {
	title:{
		type: sequelize.STRING,
		allowNull: false
	},
	description:{
		type: sequelize.TEXT,
		allowNull: false
	}
});

Topics.sync({force: false});

module.exports = Topics;