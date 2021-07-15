const Students = require('../data/student');
let studentController = {};
let _Students = Students;



/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
 studentController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let name = req.query.name || ''; //图书名称
    let total = 0;
    let rltBooks = [];
    if (name.length > 0) {
      let mockBooks = _Students.filter(book => {
        return book.name.indexOf(name) > -1;
      });
      total = mockBooks.length; //总条数
      rltBooks = mockBooks.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    } else {
      total = _Students.length; //总条数
      rltBooks = _Students.filter((u, index) => index < limit * page && index >= limit * (page - 1))
    }
    res.json({
      total: total,
      limit: limit,
      students: rltBooks
    })
  };

  module.exports = studentController;
  