<template>
  <header>
    <div class="contain">
      <div style="background-color: #fff;">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
              background-color="rgba(0,0,0,0.6)" text-color="#fff" active-text-color="#ffd04b">

              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                  <template slot="title">诈骗趣事</template>
                  <el-menu-item index="2-1">电信诈骗</el-menu-item>
                  <el-menu-item index="2-2">网络诈骗</el-menu-item>
                  <el-menu-item index="2-3">钓鱼木马</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title">曝光栏</template>
                  <el-menu-item index="3-1">生活区</el-menu-item>
                  <el-menu-item index="3-2">缴费区</el-menu-item>
                  <el-menu-item index="3-3">购物区</el-menu-item>
              </el-submenu>
              <el-menu-item index="4">举报</el-menu-item>
          </el-menu>
      </div>

      <div>
          <span v-if="isShow">
              <span class="tab" @click="redirect(4)">登录</span>
              <span class="tab"  @click="toregister">注册</span>
          </span>

          <el-dialog title="发布职位" :visible.sync="publishvisible">
              <el-form :model="publishInfo" :rules="publishRules" ref='publishInfo'>
                  <el-form-item label="职位名称" prop="title" class="jobinput">
                      <el-input class="require" v-model="publishInfo.title"></el-input>
                  </el-form-item>
                  <el-form-item label="职位介绍" prop="content" class="jobinput">
                      <el-input type="textarea" rows="10" class="require" v-model="publishInfo.content"></el-input>
                  </el-form-item>
                  <el-form-item>
                      <el-button @click="addjob('publishInfo')">确定</el-button>
                  </el-form-item>
              </el-form>
          </el-dialog>

          <span v-if="!isShow" class="tab" @click="logout()" >退出登录</span>
      </div>
    </div>
  </header>
</template>
<script>
import fetch from '../../api/fetch'
export default {
  data () {
    var checktitle = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('职位名称不能为空'))
      } else {
        callback()
      }
    }
    var checkintroduce = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('职位介绍不能为空'))
      } else {
        callback()
      }
    }
    var checkskill = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('技术要求不能为空'))
      } else {
        callback()
      }
    }
    return {
      index: 0,
      count: 0,
      amount: 0,
      websocket: null,
      publishInfo: {
        hrId: '',
        title: '',
        content: '',
        companyId: '',
        skillList: [
          {
            name: '',
            weight: 0
          }
        ]
      },
      publishvisible: false,
      isHr: false,
      content: '',
      companyList: [],
      msg: '',
      isShow: true,
      publishRules: {
        title: [{validator: checktitle, trigger: 'blur'}],
        content: [{validator: checkintroduce, trigger: 'blur'}],
        skillList: [{validator: checkskill, trigger: 'blur'}]
      }
    }
  },
  created () {
  },
  watch: {
    amount () {
      location.reload()
    }
  },
  mounted () {
    if (localStorage.getItem('userId') || localStorage.getItem('companyId')) {
      this.isShow = false
    }
    if (localStorage.getItem('role') === '1') {
      this.isHr = true
    }
  },
  methods: {
    redirect (num) {
      if (num === 1) {
        this.$router.push({name: 'index'})
      } else if (num === 2) {
        this.$router.push({name: 'userInfo'})
      } else if (num === 3) {
        this.$router.push({name: 'infoCenter'})
      } else if (num === 4) {
        this.$router.push({name: 'login'})
      } else if (num === 5) {
        this.$router.push({name: 'infoCenter'})
      } else if (num === 6) {
        this.$router.push({name: 'hrView'})
      }
    },
    toregister () {
        this.$router.push({name: 'register'})
    },
    logout () {
        sessionStorage.removeItem('userId')
        localStorage.removeItem('role')
        localStorage.removeItem('companyId')
        this.$router.push({name: 'login'})
    },
    addjob (formName) {
        this.publishvisible = false
        this.publishInfo.hrId = sessionStorage.getItem('userId')
        this.publishInfo.companyId = localStorage.getItem('companyId')
        let _job = {
          jname : this.publishInfo.title,
          jobinfo : this.publishInfo.content,
          jskillList : this.publishInfo.skillList
        }

        this.$refs[formName].validate(valid => {
          if (valid) {
            fetch.publishJob(_job).then(res => {
              if (res.status === 200) {
                this.amount++
                this.$refs[formName].resetFields()
              }
            }).catch(e => {
              console.log(e)
            })
          }
        })
    },
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 60px;
    background: rgba(0,0,0,0.8);
  }
  .contain {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin: auto;
    line-height: 60px;
    font-weight: 500;
  }
  .contain .tab{
    color: white;
    font-size: 16px;
    margin: 10px;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }

  .require {
    width: 80%;
  }

</style>
