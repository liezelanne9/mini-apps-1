const Sequelize = require('sequelize');
const connection = require('./index');

const Schema = connection.define(
    'groceries', 
    {
        name: { type: Sequelize.STRING, allowNull: false },
        quantity: {type: Sequelize.STRING}
    },
    { timestamps: false },
)

connection
    .sync()
    .then(() => console.log('Synced table with database'))
    .catch(error => console.lerror(error))

module.exports = Schema;