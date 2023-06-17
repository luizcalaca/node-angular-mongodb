var express = require('express');

var studentController = require('../controller/studentController');
const router = express.Router();

router.route('/student/login').post(studentController.loginUserControllerFn);
router.route('/student/create').post(studentController.createStudentControllerFn);


module.exports = router;
