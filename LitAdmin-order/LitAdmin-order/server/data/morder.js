/**
 * 初始化订单(order)模拟数据
 */
const Mock = require('mockjs');

const Orders = [];
for (let i = 0; i < 100; i++) {
  Orders.push(Mock.mock({
    id: Mock.Random.guid(),
    ordername: Mock.Random.ctitle(2, 12),
    customer: Mock.Random.cname(),
    ordertime: Mock.Random.datetime(),
    note: Mock.Random.csentence(1, 120)
  }))
}

module.exports = Orders;
