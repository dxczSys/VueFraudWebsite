<template>
    <div class="wrapper">
        <el-collapse>
            <el-collapse-item title="修改手机号" name="1" class="set">
                <el-form :model="phoneForm" status-icon :rules="phonerules" ref="phoneForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号" prop="phone" class="settinginput">
                        <el-input v-model="phoneForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn" @click="changePhone('phoneForm')">确定</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>

            <el-collapse-item title="修改密码" name="2" class="set">
                <el-form :model="passForm" status-icon :rules="passwordrules" ref="passForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass" class="settinginput">
                    <el-input type="password" v-model="passForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkpass" class="settinginput">
                    <el-input type="password" v-model="passForm.checkpass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" @click="changePass('passForm')">确定</el-button>
                </el-form-item>
                </el-form>
            </el-collapse-item>

            <el-collapse-item title="修改邮箱" name="3" class="set">
                <el-form :model="emailForm" status-icon :rules="emailrules" ref="emailForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="邮箱" prop="email" class="settinginput">
                    <el-input v-model="emailForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" @click="changeEmail('emailForm')">确定</el-button>
                </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data () {
        let checkphone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        }

        let checkpass = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入正确的密码'))
            }else if (value !== this.passForm.password) {
                return callback(new Error('两次密码不一致'))
            }else {
                callback()
            }
        }

        let confirmPass = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请再次输入正确的密码'))
            } else {
                callback()
            }
        }
        let checkemail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入正确的邮箱'))
            } else {
                callback()
            }
        }
        return {
            phoneForm: {
                uphone: ''
            },
            passForm: {
                upassword: '',
                checkpass: ''
            },
            emailForm: {
                uemail: ''
            },

            phonerules: {
                phone: [{ validator : checkphone, trigger : 'blur' }]
            },
            passwordrules: {
                password: [{ validator : confirmPass, trigger : 'blur' }],
                checkpass: [{ validator : checkpass, trigger : 'blur' }]
            },
            emailrules: {
                email: [{ validator : checkemail, trigger : 'blur' }]
            }
        }
    },
    methods: {
        changePhone (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.api.changePhone(this.phoneForm).then(res => {
                        if (res.status === 200 && res.data.code) {
                            this.$message.success('修改成功')
                        }
                    })
                }
            })
        },

        changePass (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.api.changePass(this.passForm.upassword).then(res => {
                        if (res.data.code) {
                            this.$message.success('修改成功')
                        }
                    })
                }
            })
        },

        changeEmail (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.api.changeEmail(this.emailForm).then(res => {
                        if (res.data.code) {
                            this.$message.success('修改成功')
                        }
                    })
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.demo-ruleForm {
    margin-top: 20px
}

.set {
    margin-top: 21px;
    font-size: 14px;
    color: #909399
}

.btn {
    position: relative;
    top: -62px;
    left: 225px;
}

.settinginput {
    width: 75%
}
</style>
