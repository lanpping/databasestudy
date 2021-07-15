<template>
  <el-dialog title="新增用户" :visible.sync="showFlag" custom-class="dialog-small" @close="closeDialog">
    <el-form ref="formData" :model="formData" :rules="formRules" label-width="80px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="formData.name" placeholder="请输入用户账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="所属类型" prop="type">
        <el-input v-model="formData.type" placeholder="请输入数字(1代表管理员，2代表一级服务商，3代表二级服务商，4代表客服)"></el-input>
      </el-form-item>
      <el-form-item label="用户编码" prop="parent">
        <el-input v-model="formData.parent" placeholder="请输入用户编码，无则填null"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="formData.tel" placeholder="请输入用户联系电话"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" placeholder="请输入用户邮箱"></el-input>
      </el-form-item>
      <el-form-item class="dialog-footer" align="center">
        <el-button type="primary" @click="onSave('formData')">保 存</el-button>
        <el-button @click="onCancel('formData')">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { userAdd } from '../../config/interface'
export default {
  data () {
    const validate = (rule, value, callback) => {
      const reg = /^[0-9a-zA-Z]*$/g
      if (!value) {
        callback(new Error('请输入内容'))
      } else if (value.length < 0 || value.length > 16) {
        callback(new Error('内容长度需在 1 到 16 个字符'))
      } else if (!reg.test(value)) {
        callback(new Error('内容需为字母或数字'))
      } else {
        callback()
      }
    }
    return {
      showFlag: false,
      formData: {
        name: null,
        password: null,
        type: null,
        parent: null,
        tel: null,
        email: null
      },
      formRules: {
        name: [
          { validator: validate, trigger: 'blur' }
        ],
        password: [
          { validator: validate, trigger: 'blur' }
        ],
        type: [
          { validator: validate, trigger: 'blur' }
        ],
        parent: [
          { validator: validate, trigger: 'blur' }
        ],
        tel: [
          { validator: validate, trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
      },
      reqFlag: {
        add: true
      }
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    // 初始化
    init () {
      this.$nextTick(() => {
        this.changeShowFlag()
      })
    },
    changeShowFlag () {
      this.showFlag = !this.showFlag
    },
    // 保存
    onSave (formData) {
      this.$refs[formData].validate((valid) => {
        if (valid) {
          const url = userAdd
          if (this.reqFlag.add) {
            this.reqFlag.add = false
            let params = {
              name: this.formData.name,
              password: this.$md5(this.formData.password),
              type: this.formData.type,
              parent: this.formData.parent,
              tel: this.formData.tel,
              email: this.formData.email
            }
            this.$http(url, params)
            .then(res => {
              if (res.code == 1) {
                this.$common.toast('添加成功', 'success', false)
                this.$emit('addCallBack')
                this.onCancel(formData)
              }
              this.reqFlag.add = true
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
      this.changeShowFlag()
      this.$refs[formName].resetFields()
    },
    // 关闭弹出框
    closeDialog () {
      this.$refs['formData'].resetFields()
    }
  }
}
</script>

<style lang="scss">

</style>
