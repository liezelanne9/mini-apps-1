const controller = require('./controller');
const router = require('express').Router();

router.route('/') // get
    .get(controller.get)
    .post(controller.post)

router.route('/:id') // id of item to delete ex: localhost:3000/api/5, passes an id property to req.params
    // colon makes it a key on the params object
    .delete(controller.delete)
    .put(controller.put)

module.exports = router;