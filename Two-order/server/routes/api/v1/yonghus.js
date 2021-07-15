/***
 * yonghus相关路由
 * 采用 restful api 风格
 */
 var express = require('express');
 var router = express.Router();
 var indexRouter = {};
 var userController = require('../../../controllers/user');
 var yonghuController = require('../../../controllers/yonghu');
 
 //先检查登录
 router.use(userController.checkLogin);
 
 //返回order的集合
 router.get('/', yonghuController.find);
 
 //返回指定的order
 router.get('/:id', yonghuController.findById);
 
 //创建order
 router.post('/', yonghuController.create);
 
 //更新order全部信息
 router.put('/:id', yonghuController.update);
 
 //更新order部分信息
 router.patch('/:id', yonghuController.patch);
 
 //批量删除
 router.delete('/batch/:ids', yonghuController.deleteBatch);
 
 //删除指定的order
 router.delete('/:id', yonghuController.delete);
 
 
 indexRouter.router = router;
 
 module.exports = indexRouter;