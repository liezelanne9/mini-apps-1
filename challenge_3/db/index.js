const Sequelize = require('sequelize');

const connection = new Sequelize('grocerylist', 'root', 'hackreactor', {
    host: 'localhost',
    dialect: 'mysql'
});

connection
    .authenticate()
    .then(() => {
        console.log('Connected to database!')
    })
    .catch(err => {
        console.error('Unable to connect to the database: ', err)
    })

module.exports = connection;