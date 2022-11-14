
const router = require('express').Router();
const { read,add,remove,edit } = require('./list.controller')

router.route('/listId').get(read);
router.route('/add').post(add);
router.route('/remove/:removeId').delete(remove);
router.route('/edit/:editId/:editValue').put(edit);

module.exports= router;   