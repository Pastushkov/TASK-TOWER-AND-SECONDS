const router = require('express')()
const taskController = require('../controllers/taskController')

router.post('/tower',taskController.tower)

router.post('/seconds',taskController.time)

module.exports = router