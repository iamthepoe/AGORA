const sequelize = require('sequelize');
const connection = new sequelize('agora', 'root', '12345',{
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;