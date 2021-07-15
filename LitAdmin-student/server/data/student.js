const Mock = require('mockjs');

const Students = [];
for (let i = 0; i < 100; i++) {
  Students.push(Mock.mock({
    stuid: Mock.Random.guid(),
    stuname: Mock.Random.ctitle(2, 12),
    brithday: Mock.Random.date()
  }))
}

module.exports = Students;
