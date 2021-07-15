let path = '/demo-weekly/back-end/api';

module.exports = {
    // user-用户管理
    userLogin: path + '/user/login', // 用户登录
    userLogout: path + '/user/logout', // 用户登出
    userAdd: path + '/user/add', // 新增用户
    userUpdateInfo: path + '/user/updateInfo', // 更新用户信息
    userUpdateState: path + '/user/updateState', // 更新用户状态
    userDetail: path + '/user/detail', // 获取用户详情
    userList: path + '/user/list', // 获取用户列表


    // weekly-订单管理
    weeklyAdd: path + '/weekly/add', // 新增订单
    weeklyUpdateInfo: path + '/weekly/updateInfo', // 更新订单信息
    weeklyUpdateState: path + '/weekly/updateState', // 更新订单状态
    weeklyDetail: path + '/weekly/detail', // 获取订单详情
    weeklyList: path + '/weekly/list' // 获取订单列表
};