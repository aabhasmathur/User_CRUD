const express = require('express');
const controller = require('../Controller/Index');
const router = express.Router();

router.route('/:id').get(controller.getuserbyId).patch(controller.updateuserbyId).delete(controller.deleteuserbyId)


router.post('/data/entry', controller.addentry)

router.get('/', controller.getallusers);


module.exports = router;