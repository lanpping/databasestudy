<template>
  <div class="weekly-main-wrap weekly-add-wrap">
    <h3 class="v-line-icon">编辑订单</h3>
    <el-form ref="formData" :model="formData" :rules="formRules" label-width="110px">

      <!-- <el-form-item label="周报时间" prop="title">
        <el-col :span="12">
          <el-date-picker
            v-model="formData.title"
            type="week"
            format="yyyy 第 WW 周"
            value-format="yyyy-MM-dd"
            placeholder="选择周"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
        <el-col class="week-time" :span="12">
          <span class="title">时间范围：</span>
          <span><i class="el-icon-date"></i> {{startTime}}</span>
          <span class="line">-</span>
          <span><i class="el-icon-date"></i> {{endTime}}</span>
        </el-col>
      </el-form-item>

      <el-form-item label="本周工作总结" prop="thisWeekWork">
        <quill-editor class="quill" :options="editorOption" ref="QuillEditor" v-model="formData.thisWeekWork">
        </quill-editor>
      </el-form-item>

      <el-form-item label="下周工作计划" prop="nextWeekWork">
        <quill-editor class="quill" :options="editorOption" ref="QuillEditor" v-model="formData.nextWeekWork">
        </quill-editor>
      </el-form-item>

      <el-form-item label="需协调与帮助" prop="collaboration">
        <el-input v-model="formData.collaboration"></el-input>
      </el-form-item> -->

      <el-form-item label="订单名称" prop="title">
          <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="买家名称" prop="buyer">
          <el-input v-model="formData.buyer"></el-input>
      </el-form-item>
      <!-- <el-form-item label="客服ID" prop="userId">
          <el-input v-model="formData.userId"></el-input>
      </el-form-item> -->
      <el-form-item label="下单时间" prop="startTime">
        <el-input v-model="formData.startTime"></el-input>
      </el-form-item>

      <el-form-item class="dialog-footer" align="center">
        <el-button type="primary" @click="onSave('formData')">保 存</el-button>
        <el-button @click="onCancel('formData')">取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { weeklyDetail, weeklyUpdateInfo } from '@/config/interface'
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      id: null, // 周报id
      formData: {
        // title: this.$moment().format('YYYY-MM-DD'),
        // thisWeekWork: null,
        // nextWeekWork: null,
        // collaboration: null
        title: null,
        userId: null,
        startTime: null,
        buyer: null
      },
      formRules: {
        // title: [
        //   { required: true, message: '请选择周报时间', trigger: 'blur' }
        // ],
        // thisWeekWork: [
        //   { required: true, message: '请填写本周工作总结', trigger: 'blur' }
        // ]
      },
      reqFlag: {
        edit: true
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      editorOption: {
        modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }]
            ]
        }
      }
    }
  },
  computed: {
    // // 周报开始时间
    // startTime: function () {
    //   let title = this.formData.title
    //   let startTime = this.$moment(title).startOf('week').format('YYYY-MM-DD')
    //   return startTime
    // },
    // // 周报结束时间
    // endTime: function () {
    //   let title = this.formData.title
    //   let endTime = this.$moment(title).endOf('week').format('YYYY-MM-DD')
    //   return endTime
    // }
  },
  created () {
    this.id = this.$route.query.id
    console.log('this.id==' + this.id)
    this.getUserDetail()
  },
  methods: {
    getUserDetail () {
      const url = weeklyDetail
      let params = {
        id: this.id
      }
      this.$http(url, params)
      .then(res => {
        if (res.code == 1) {
          let data = res.data
          this.formData = {
            title: data.title,
            // thisWeekWork: data.thisWeekWork,
            // nextWeekWork: data.nextWeekWork,
            // collaboration: data.collaboration
            userId: data.userId,
            startTime: data.startTime,
            buyer: data.buyer
          }
        }
      })
    },
    // 保存
    onSave (formData) {
      this.$refs[formData].validate((valid) => {
        if (valid) {
          const url = weeklyUpdateInfo
          if (this.reqFlag.edit) {
            this.reqFlag.edit = false

            // let title = this.formData.title
            // // console.log('formData.title==' + title)

            // let yearNum = this.$moment(title).year()
            // // console.log('yearNum==' + yearNum)

            // let weekNum = this.$moment(title).week()
            // // console.log('weekNum==' + weekNum)

            let params = {
              id: this.id,
              // title: yearNum + ' 第 ' + weekNum + ' 周',
              // startTime: this.startTime,
              // endTime: this.endTime,
              // thisWeekWork: this.formData.thisWeekWork,
              // nextWeekWork: this.formData.nextWeekWork,
              // collaboration: this.formData.collaboration
              title: this.formData.title,
              userId: this.formData.userId,
              startTime: this.formData.startTime,
              buyer: this.formData.buyer
            }
            this.$http(url, params)
            .then(res => {
              if (res.code == 1) {
                this.$common.toast('修改成功', 'success', false)
                this.onCancel(formData)
              }
              this.reqFlag.edit = true
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消
    onCancel (formName) {
      this.$router.push({ path: '/home/weekly' })
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss">

</style>
