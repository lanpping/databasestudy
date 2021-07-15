/**
 * 初始化用户表(yonghu)模拟数据
 */
 const Mock = require('mockjs');

 const Yonghus = [];
 for (let i = 0; i < 100; i++) {
   Yonghus.push(Mock.mock({
     id: Mock.Random.guid(),
     S_ID:Mock.Random.natural(1000,9999),
     P_ID:Mock.Random.natural(1000,9999),
     fwsname: Mock.Random.ctitle(2, 8),
     kfname: Mock.Random.ctitle(2, 8),
     tel: Mock.Random.string('1234567890',11)
    
   }))
 }
 
 module.exports = Yonghus;
 