const { password } = require("../config/db");
// 在mysqljs中，?表示变量，??是表或者字段名，?是value

const sqlMap = {
  user: {
    // 登陆
    login: `select * from user where name = ? and password = ? and state != 0`,
    // 新增用户
    // add: 'insert IGNORE into user (name, password, email, create_time, update_time) values (?, ?, ?, ?, ?)',
    add: 'insert IGNORE into user (name, password, type, email, parent, tel) values (?, ?, ?, ?, ?, ?)',
    // 更新用户信息
    // updateInfo: 'update user set name = ?, password = ?, email = ?, update_time = ? where id = ? and type != 1 and state != 0',
    updateInfo: 'update user set name = ?, password = ?, type=?, email = ?, parent = ?, tel = ? where id = ? and type != 1 and state != 0',
    // 更改用户状态
    updateState: 'update user set state = ? where id = ? and type != 1 and state != 0',
    // 获取用户信息
    getDetail: 'select * from user where id = ? and state != 0',
    // 查询用户列表条数
    selectTotal: 'select count(*) as totalCount from user where state != 0',
    // 用户列表
    selectList: 'select id, name, type, parent, tel, email, state from user where state != 0'
  },
  weekly: {
    // 新增订单
    // add: 'insert into weekly (userId, startTime, endTime, title, thisWeekWork, nextWeekWork, collaboration, create_time, update_time) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      add: 'insert into weekly (userId, startTime, title, buyer) values (?, ?, ?, ?)',
    

    // 更新订单信息
    //updateInfo: 'update weekly set startTime = ?, title = ? where id = ? and state != 0',
    updateInfo: 'update weekly set startTime = ?, title = ?, userId=?, buyer=? where id = ? and state != 0',
    
    // 更新订单状态
    // updateState: 'update weekly set state = ?, update_time = ? where id = ? and state != 0',
    updateState: 'update weekly set state = ? where id = ? and state != 0',

    // 查询订单列表条数
    selectTotal: 'select count(*) as totalCount from weekly where state != 0',
    // selectTotal: 'select count(*) as totalCount from weekly ',用此行显示暂无数据
     // 查询订单列表
    // selectList: 'select weekly.id, userId, user.name as userName, startTime, endTime, title, weekly.create_time, weekly.update_time, weekly.state from weekly,user where weekly.userId = user.id and weekly.state != 0',
    selectList: 'select weekly.id, userId, user.name as userName, startTime,title,buyer from weekly,user where weekly.userId = user.id and weekly.state != 0'
  }
}

module.exports = sqlMap;