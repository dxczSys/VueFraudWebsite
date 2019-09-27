<template>
    <div class="container">
        <div class="hrForm animated bounceInDown">
            <div class="choice" ref="choice">我要注册</div>

            <el-form :model="hrInfo" status-icon :rules="hrrules" ref="hrInfo" label-width="100px" class="hrruleForm">
                <el-form-item  prop="username">
                    <el-input type="text" v-model="hrInfo.username" auto-complete="off" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="hrInfo.password" auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model.number="hrInfo.phone" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input v-model="hrInfo.email" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="registerBtn" @click="hrSubmit('hrInfo')">注册</el-button>
                </el-form-item>
            </el-form>

            <!-- <div class="introduceCompany">
                <img src="../assets/logo_s.png" @click="toIndex"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
            </div> -->

            <div class="footer-tip3" @click="toLogin">已有账号?直接登录</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        let checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("请输入手机号"))
            } else {
                callback()
            }
        }

        var checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("请输入邮箱"))
            } else {
                callback()
            }
        }

        var validUsername = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"))
            } else {
                callback()
            }
        }

        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            } else {
                callback()
            }
        }

        return {
            hrInfo: {
                password: "",
                phone: "",
                username: "",
                email: "",
            },
            hrrules: {
                username: [{ validator : validUsername, trigger : "blur" }],
                password: [{ validator : validatePass, trigger : "blur" }],
                phone: [{ validator : checkPhone, trigger : "blur" }],
                email: [{ validator : checkEmail, trigger : "blur" }]
            }
        }
    },

    mounted() {
    },

    methods: {
        hrSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let result = {
                        uemail: this.hrInfo.email,
                        upasswd: this.hrInfo.password,
                        uphone: this.hrInfo.phone,
                        uname: this.hrInfo.username,
                    }
                    this.api.userRegister(result).then(res => {
                        if (res.status == 200 && res.data.code) {
                            this.$message.success('注册成功')
                            this.$router.push({ name: "login" })
                        }else {
                            this.$message.warning( res.data.msg )
                        }
                    })
                }
            })
        },

        toLogin() {
            this.$router.push({name: "login"})
        },

        toIndex() {
            this.$router.push({name: 'index'})
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    border: 1px solid #ededed;
    width: 100%;
    background-size: 100% 100%;
    min-height: 100vh;
}

.choice{
    text-align: center;
    line-height: 30px;
    color: #5a5a5a;
    //padding-right: 285px;
}

.hrForm {
    background: #fff;
    border: 1px solid #ededed;
    width: 545px;
    height: 463px;
    margin: 150px auto 150px auto;
    box-shadow: 0px 5px 8px #888;
    border-radius: 8px;
    padding-top: 36px;
    position: relative;
}

.hrruleForm {
    width: 500px;
    position: relative;
    top: 14px;
    left: -14px;
    padding: 14px 14px 14px 100px;
    /deep/ .el-form-item__content {
        margin-left: 0px !important;
    }
}

.footer-tip3{
    position: absolute;
    bottom: 16px;
    right: 16px;
    cursor: pointer;
    color: #5a5a5a;
}

.registerBtn {
    width: 100%;
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

.introduceCompany {
    color: #5f6368;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
    width: 320px;
    height: 600px;
    padding: 30px 30px 0 0;
}

.introduceCompany img {
    width: 300px;
    height: 300px;;
    margin-bottom: 20px;
    cursor: pointer;
}

.companyForm {
    padding: 0 66px;
}
</style>
