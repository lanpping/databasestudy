const Mock = require('mockjs');
const Orders = require('../data/morder');
let orderController = {};
let _Orders = Orders;



/**
 * 通过订单名称查询，获取订单列表
 * @param req
 * @param res
 */
 orderController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let ordername = req.query.ordername || ''; //订单名称
    let total = 0;
    let rltOrders = [];
    if (ordername.length > 0) {
      let mockOrders = _Orders.filter(order => {
        return order.ordername.indexOf(ordername) > -1;
      });
      total = mockOrders.length; //总条数
      rltOrders = mockOrders.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    } else {
      total = _Orders.length; //总条数
      rltOrders = _Orders.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    }
    res.json({
      total: total,
      limit: limit,
      orders: rltOrders
    })
  };

/**
 * 通过id获取某一条订单信息
 * @param req
 * @param res
 */
 orderController.findById = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let order = _.find(_Orders, function (b) {
    return b.id === id;
  });
  res.json(order || null)
};

/**
 * 添加一条订单信息
 * @param req
 * @param res
 */
 orderController.create = function (req, res) {
  let ordername = req.body.ordername;
  let customer = req.body.customer;
  let note = req.body.note;
  let ordertime = req.body.ordertime;
  _Orders.push({
    id: Mock.Random.guid(),
    ordername: ordername,
    customer: customer,
    note: note,
    ordertime: ordertime
  });
  res.json({"errcode": 0, "errmsg": "新增成功"})
};

/***
 * 更新一条订单记录
 * @param req
 * @param res
 */
 orderController.update = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let ordername = req.body.ordername;
  let customer = req.body.customer;
  let note = req.body.note;
  let ordertime = req.body.ordertime;

  let i = _.findIndex(_Orders, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Orders[i].ordername = ordername;
    _Orders[i].customer = customer;
    _Orders[i].note = note;
    _Orders[i].ordertime = ordertime;
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

/**
 * 更新一条订单记录的部分信息
 * @param req
 * @param res
 */
 orderController.patch = function (req, res) {

};

/**
 * 批量删除
 * @param req
 * @param res
 */
 orderController.deleteBatch = function (req, res) {
  let ids = req.params.ids;
  ids = ids.split(',');
  _Orders = _Orders.filter(b => !ids.includes(b.id))
  res.json({"errcode": 0, "errmsg": "删除成功"});
};

/**
 * 单条删除
 * @param req
 * @param res
 */
 orderController.delete = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let i = _.findIndex(_Orders, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Orders.splice(i, 1);
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

  module.exports = orderController;
  