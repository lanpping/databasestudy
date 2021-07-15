// 第三步：写一个路由api,
var express = require('express');
var router = express.Router();
var indexRouter = {};
// 引用学生的控制器
var studentController = require('../../../controllers/student');


//返回学生信息的集合
router.get('/', studentController.find);


indexRouter.router = router;

module.exports = indexRouter;