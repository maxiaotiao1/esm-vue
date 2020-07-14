<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar_box">
        <img :src=" require('../../assets/img/logo.png')">
      </div>
      <!--登陆表单区域-->
      <div>
        <el-form
          label-width="0px"
          class="login_form"
          :model="loginForm"
          :rules="loginFormRules"
          ref="loginFormRef"
        >
          <el-form-item prop="userName">
            <el-input
              prefix-icon="iconfont icon-denglu"
              v-model="loginForm.userName"
            />
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
              type="password"
              prefix-icon="iconfont icon-denglumima"
              v-model="loginForm.userPassword"
            />
          </el-form-item>
          <el-form-item class="btns">
            <el-button
              type="primary"
              @click="login"
            >
              登陆
            </el-button>
            <el-button
              type="info"
              @click="resetLoginForm"
            >
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: 'root',
        userPassword: '88888888'
        // eslint-disable-next-line indent
        },
      loginFormRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3-10之间', trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 15, message: '长度在8-15之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('/user/login', this.loginForm)
        // eslint-disable-next-line eqeqeq
        if (res.code != 20000) return this.$message.error('登陆失败')
        console.log(res)
        this.$message.success('登陆成功')
        window.sessionStorage.setItem('token', res.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang = "less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.btns{
  display: flex;
  justify-content: flex-end;
}

.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
