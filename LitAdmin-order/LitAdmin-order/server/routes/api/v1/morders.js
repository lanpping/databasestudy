/***
 * orders相关路由
 * 采用 restful api 风格
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var userController = require('../../../controllers/user');
var orderController = require('../../../controllers/morder');

//先检查登录
router.use(userController.checkLogin);

//返回order的集合
router.get('/', orderController.find);

//返回指定的order
router.get('/:id', orderController.findById);

//创建order
router.post('/', orderController.create);

//更新order全部信息
router.put('/:id', orderController.update);

//更新order部分信息
router.patch('/:id', orderController.patch);

//批量删除
router.delete('/batch/:ids', orderController.deleteBatch);

//删除指定的order
router.delete('/:id', orderController.delete);


indexRouter.router = router;

module.exports = indexRouter;