var express = require('express');
var router = express.Router();
var indexRouter = {};

var studentController = require('../../../controllers/student');


//返回book的集合
router.get('/', studentController.find);


indexRouter.router = router;

module.exports = indexRouter;