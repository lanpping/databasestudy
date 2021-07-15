const $sql = require('../sql/sqlMap')
const moment = require('moment')
const $http = require('../sql/http')
const $time = require('../utils/time')
const jwt = require('jwt-simple')
const express = require('express')
const app = express()
app.set('jwtTokenSecret', 'YOUR_SECRET_STRING')


function formatData(rows) {
    return rows.map(row => {
      return Object.assign({}, row)
    })
  }

const mysum = {
    /*获取统计列表 start*/
  list (req, res) {
    let params = req.body
    $http.userVerify(req, res, () => {
    //   let sqlSelectTotal = $sql.weekly.selectTotal
    //   let sqlSelectList= $sql.weekly.selectList

    let sqlSelectTotal = $sql.mysum.selectTotal
    let sqlSelectList= $sql.mysum.selectList

      let userId = params.userId
      let userType = params.userType
      let searchId = params.searchId
      let searchUserId = params.searchUserId
      let searchTitle = params.searchTitle
      let searchStartTime = params.searchStartTime
      let searchBuyer= params.searchBuyer
    //  let searchEndTime = params.searchEndTime
      params.pageSize = !params.pageSize ? 10 : params.pageSize
      // 分页查询入参 start
      let limitFirst = (params.pageNum-1)*params.pageSize;
      let limitLast = params.pageSize;
      // 分页查询入参 end

      if(userType!=1){
        sqlSelectTotal += " and userId = "+userId
        sqlSelectList += " and userId = "+userId
      }else{
        if(searchUserId) {
          sqlSelectTotal += " and userId = "+searchUserId
          sqlSelectList += " and userId = "+searchUserId
        }
    }
    
      let sql= sqlSelectTotal + '; ' + sqlSelectList
      // sql += " order by weekly.id desc limit ?,?"; // id倒序排
      sql += " order by mysum.fwsID limit ?,?"; // id序排
      let arrayParams = [limitFirst, limitLast]

      $http.connPool(sql, arrayParams, (err, result) => {
        if(err) {
          return $http.writeJson(res, {code:-2, message:'失败',errMsg: err})
        } else {
          let resultData = {}
          resultData.totalCount = result[0][0]['totalCount']
          resultData.list = formatData(result[1])
          return $http.writeJson(res, {code: 1, data: resultData, message: '获取统计列表成功'})
        }
      })
    })
  },
  /*获取统计列表 end*/

}

module.exports = mysum
