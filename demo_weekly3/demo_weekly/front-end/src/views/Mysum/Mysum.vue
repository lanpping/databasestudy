<template>
  <div class="weekly-wrap">
    <div class="main-content">
      <el-table v-loading="!this.reqFlag.search" :data="tableData" header-row-class-name="table-header" border style="width: 100%">
        <el-table-column prop="fwsID" label="服务商ID" align="center" width="120"></el-table-column>
        <el-table-column prop="fwsName" label="服务商名称" align="center" width="120"></el-table-column>
        <el-table-column prop="kfNums" label="客服数" align="center"></el-table-column>
        <el-table-column prop="orderNums" label="订单数" align="center"></el-table-column>
      </el-table>

      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { userList, weeklyList, weeklyUpdateState } from '@/config/interface'
import { mysumList } from '@/config/interface'
export default {
  data () {
    return {
    //   keywords: {
    //     id: null,
    //     title: null,
    //     userId: null,
    //     startTime: null,
    //     buyer: null
    //     // endTime: null
    //   },
    //   keywordsParams: {}, // 搜索请求是的搜索入参
    //   searchRules: {
    //   },
      reqFlag: { // 防止频繁点击，造成连续多次发请求
        user: true,
        search: true,
        delete: true
      },
      mysumList: [],
      pageNum: 1, // 请求第几页
      pageSize: this.$store.state.pageSize, // 每页请求多少条
      currentPage: 1, // 初始时在第几页
      totalCount: 0, // 总共多少条数据
      tableData: []
    }
  },
  computed: {
    userType: function () {
      let userType = this.$store.state.userInfo.type
      return userType
    },
    userPower: function () {
      let userType = this.$store.state.userInfo.type
      return userType == 1
    }
  },
  created () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
    this.queryMysumList()
    //   this.queryUserList('')
    //   this.keywordsParams = JSON.parse(JSON.stringify(this.keywords))
    //   this.queryWeeklyList()
    },
    // queryUserList (userName) {
    //   const url = userList
    //   if (this.reqFlag.user) {
    //     this.reqFlag.user = false
    //     let params = {
    //       userType: this.userType,
    //       searchName: !userName ? null : userName,
    //       pageNum: 1,
    //       pageSize: 20
    //     }
    //     this.$http(url, params)
    //     .then(res => {
    //       if (res.code == 1) {
    //         let data = res.data
    //         let list = data.list
    //         let objList = []
    //         if (list.length > 0) {
    //           for (let value of list) {
    //             let obj = {
    //               id: value.id,
    //               name: value.name
    //             }
    //             objList.push(obj)
    //           }
    //         }
    //         objList.unshift({ 'id': null, 'name': '全部' })
    //         this.userList = objList
    //       }
    //       this.reqFlag.user = true
    //     })
    //   }
    // },
    // queryWeeklyList () {
    //   const url = weeklyList
    //   if (this.reqFlag.search) {
    //     this.reqFlag.search = false
    //     let params = {
    //       searchId: this.keywordsParams.id,
    //       searchTitle: this.keywordsParams.title,
    //       searchUserId: this.keywordsParams.userId,
    //       searchStartTime: this.keywordsParams.startTime,
    //       searchBuyer: this.keywordsParams.buyer,
    //       // searchEndTime: this.keywordsParams.endTime,
    //       userType: this.userType,
    //       pageNum: this.pageNum,
    //       pageSize: this.pageSize
    //     }
    //     this.$http(url, params)
    //     .then(res => {
    //       if (res.code == 1) {
    //         let data = res.data
    //         this.tableData = data.list
    //         this.totalCount = data.totalCount
    //         this.currentPage = this.pageNum
    //       }
    //       this.reqFlag.search = true
    //     })
    //   }
    // },
    queryMysumList () {
      const url = mysumList
      if (this.reqFlag.search) {
        this.reqFlag.search = false
        let params = {
        //   searchId: this.keywordsParams.id,
        //   searchTitle: this.keywordsParams.title,
        //   searchUserId: this.keywordsParams.userId,
        //   searchStartTime: this.keywordsParams.startTime,
        //   searchBuyer: this.keywordsParams.buyer,
          // searchEndTime: this.keywordsParams.endTime,
          userType: this.userType,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
        this.$http(url, params)
        .then(res => {
          if (res.code == 1) {
            let data = res.data
            this.tableData = data.list
            this.totalCount = data.totalCount
            this.currentPage = this.pageNum
          }
          this.reqFlag.search = true
        })
      }
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.queryMysumList()
    }
    // // 新增管理员子组件回调
    // callBackAdd () {
    //   this.onReset('keywords')
    //   this.pageNum = 1
    //   this.queryWeeklyList()
    //   this.curPage = 1
    // },
    // // 编辑管理员子组件回调
    // callBackEdit () {
    //   this.queryWeeklyList()
    // }
  }
}
</script>

<style lang="scss">
.weekly-main-wrap{ padding: 20px;
  h3{margin: 0;}
  /* 新增+编辑的周报样式 start */
  .el-form{width: 80%; max-width: 1000px; min-width: 825px; margin: 30px auto 0;
    .quill-editor { height: auto; }
    .quill-editor .ql-container{height: 180px;}
  }
  /* 新增+编辑的周报样式 end */
  /* 周报详情样式 start */
  .week-work-box{display: block; height: 180px; padding: 5px 15px; line-height: 1.5; font-size: inherit; box-sizing: border-box; border: 1px solid #E4E7ED; border-radius: 4px; resize: vertical; cursor: not-allowed; background-color: #F5F7FA;}
  .el-input.is-disabled .el-input__inner, .week-work-box{color: #888;}
  /* 周报详情样式 end */
}
</style>
