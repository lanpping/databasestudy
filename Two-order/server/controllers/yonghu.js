const Mock = require('mockjs');
const Yonghus = require('../data/yonghu');
let yonghuController = {};
let _Yonghus = Yonghus;



/**
 * 通过服务商名称查询，获取用户列表
 * @param req
 * @param res
 */
 yonghuController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let fwsname = req.query.fwsname || ''; //服务商名称
    let total = 0;
    let rltYonghus = [];
    if (fwsname.length > 0) {
      let mockYonghus = _Yonghus.filter(yonghu => {
        return yonghu.fwsname.indexOf(fwsname) > -1;
      });
      total = mockYonghus.length; //总条数
      rltYonghus = mockYonghus.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    } else {
      total = _Yonghus.length; //总条数
      rltYonghus = _Yonghus.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    }
    res.json({
      total: total,
      limit: limit,
      Yonghus: rltYonghus
    })
  };

/**
 * 通过id获取某一条用户信息
 * @param req
 * @param res
 */
 yonghuController.findById = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let yonghu = _.find(_Yonghus, function (b) {
    return b.id === id;
  });
  res.json(yonghu || null)
};

/**
 * 添加一条用户信息
 * @param req
 * @param res
 */
 yonghuController.create = function (req, res) {
  let fwsname = req.body.fwsname;
  let kfname = req.body.kfname;
  let tel = req.body.tel;
  let S_ID = req.body.S_ID;
  let P_ID = req.body.P_ID;
  _Yonghus.push({
    id: Mock.Random.guid(),
    S_ID:S_ID,
    P_ID:P_ID,
    fwsname: fwsname,
    kfname: kfname,
    tel: tel
  });
  res.json({"errcode": 0, "errmsg": "新增成功"})
};

/***
 * 更新一条用户记录
 * @param req
 * @param res
 */
 yonghuController.update = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let fwsname = req.body.fwsname;
  let kfname = req.body.kfname;
  let tel = req.body.tel;
  let S_ID = req.body.S_ID;
  let P_ID = req.body.P_ID;

  let i = _.findIndex(_Yonghus, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Yonghus[i].fwsname = fwsname;
    _Yonghus[i].kfname = kfname;
    _Yonghus[i].tel = tel;
    _Yonghus[i].S_ID = S_ID;
    _Yonghus[i].P_ID = P_ID;
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

/**
 * 更新一条用户记录的部分信息
 * @param req
 * @param res
 */
 yonghuController.patch = function (req, res) {

};

/**
 * 批量删除
 * @param req
 * @param res
 */
 yonghuController.deleteBatch = function (req, res) {
  let ids = req.params.ids;
  ids = ids.split(',');
  _Yonghus = _Yonghus.filter(b => !ids.includes(b.id))
  res.json({"errcode": 0, "errmsg": "删除成功"});
};

/**
 * 单条删除
 * @param req
 * @param res
 */
 yonghuController.delete = function (req, res) {
  let id = _.trim(req.params.id || '');
  if (!id) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  let i = _.findIndex(_Yonghus, function (u) {
    return u.id === id
  })
  if (i > -1) {
    _Yonghus.splice(i, 1);
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

  module.exports = yonghuController;
  