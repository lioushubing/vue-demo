<template>
    <div id='login'>

      <el-row  type='flex' justify='center' align="middle" class='login-row'>
        <el-col :xs="16" :sm="12" :md="10" :lg="8" :xl="6">

            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              type="flex"
              label-position="top"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type='password'></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>

        </el-col>
        </el-row >
     </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          console.log('error submit!!')
          return false
        }
        // console.log(this.ruleForm)

        axios.post('http://localhost:8888/api/private/v1/login', this.ruleForm).then(res => {
          // console.log(res.data.meta.msg)
          if (res.data.meta.status === 200) {
            localStorage.setItem('token', res.data.data.token)
            this.$router.push({name: 'home'})
          } else {
            this.$message({
              message: res.data.meta.msg,
              type: 'error',
              duration: 1000
            })
          }
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style scoped>
#login{
  height: 100%;
  width: 100%;
  background-color: #2d434c;
}

.login-row{
  height: 100%;

}
  .demo-ruleForm{
    background-color: #fff;
    padding: 30px 20px;
    border-radius: 10px;
  }
</style>
