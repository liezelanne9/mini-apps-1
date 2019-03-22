const db = require('../db/schema')

const controller = {
    get: (req, res) => {
        db.findAll().then((items) => {
            res.status(200).send(items)
        })
        .catch(error => console.error(error));
    },

    post: (req, res) => {
        const { name, quantity } = req.body;
        db.create({ name, quantity }).then(() => {
            res.status(201).send('posted');
        })
        .catch(error => console.error(error));
    },

    delete: (req, res) => {
        const { id } = req.params; // { id: '2' } req.params.id
        db.destroy({ where: { id } }).then(() => {
            res.status(202).send(`deleted item at id ${req.params.id}`);
        })
        .catch(error => console.error(error));
    },

    put: (req, res) => {
        const { name, quantity } = req.body;
        const { id } = req.params;
        db.update( { name, quantity }, {where: { id } }).then(() => {
            res.status(203).send(`updated ${req.params.id}`)
        })
        .catch(error => console.error(error));
    }
}

module.exports = controller;