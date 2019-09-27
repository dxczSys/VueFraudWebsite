<template>
    <div class="container">
        <div class="registerForm animated bounceInDown">
              <img src="../assets/bj.png" class="logo" @click="backIndex"/>
              <el-form :model="loginInfo" status-icon :rules="rules2" ref="loginInfo" label-width="100px" class="loginForm">
                  <el-form-item  prop="username">
                      <el-input type="text" v-model="loginInfo.username" auto-complete="off" class="loginInput" placeholder="用户名"></el-input>
                  </el-form-item>
                  <el-form-item  prop="password">
                      <el-input type="password" v-model="loginInfo.password" auto-complete="off" class="loginInput" placeholder="密码"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button class="loginBtn" @click="submitForm('loginInfo')" >登录</el-button>
                  </el-form-item>
              </el-form>
              <div class="footer-tip" @click="toRegister">没有账号？直接注册</div>
        </div>
        <!-- <img class="bg_bottom" src="../assets/bg_bottom.png" style="display: none;" />
        <img class="bg_bottom2" src="../assets/bg_bottom2.png" style="display: none;" /> -->
    </div>
</template>

<script>
  export default {
    data () {
      var validUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        loginInfo: {
          password: '',
          username: ''
        },
        rules2: {
          username: [{validator: validUsername, trigger: 'blur'}],
          password: [{validator: validatePass, trigger: 'blur'}]
        }
      }
    },

    methods: {
      backIndex () {
        this.$router.push({ name: 'index' })
      },

      toRegister () {
        this.$router.push({ name: 'register' })
      },

      submitForm (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let _params = {
              uname : this.loginInfo.username,
              upasswd : this.loginInfo.password
            }
            this.api.userLogin(_params).then(res => {
                if (res.status === 200 && res.data.code) {
                    sessionStorage.setItem('username', res.data.msg.uname)
                    this.$router.push({ name: 'index'})
                    // this.$router.push({ name: 'hrView', params: {hrRefresh: 2} })
                }else {
                    this.$message.warning('用户名或密码错误')
                }
              })
          }
        })
      }
    }
  }
</script>

<style>
  .container {
    width: 100%;
    border: 1px solid #ededed;
    background-size: 100% 100%;
    min-height: 100vh;
  }

  .registerForm {
    background: #fff;
    border: 1px solid #ededed;
    width: 450px;
    height: 320px;
    margin: 250px auto 250px auto;
    box-shadow: 0px 5px 8px #888;
    border-radius: 8px;
    position: relative;
  }

  .loginForm {
    padding: 0 36px;
  }

  .el-form-item__content {
    margin-left: 0px !important;
  }

  .loginInput {
    width: 100%;
  }

  .footer-tip {
    color: #5a5a5a;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }

  .bg_bottom {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  .bg_bottom2 {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .logo {
    width: 274px;
    height: 80px;;
    cursor: pointer;
    opacity: 0.7;
  }

  .loginBtn {
    width: 100%;
  }

</style>
