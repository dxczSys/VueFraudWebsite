<template>
    <header>
        <div class="contain">
            <div style="background-color: #fff;">
                <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                    background-color="rgba(0,0,0,0.6)" text-color="#fff" active-text-color="#ffd04b">

                    <el-menu-item index="1" @click="routerLink(1)">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">诈骗趣事</template>
                        <el-menu-item index="2-1" @click="routerLink(2.1)">电信诈骗</el-menu-item>
                        <el-menu-item index="2-2" @click="routerLink(2.2)">网络诈骗</el-menu-item>
                        <el-menu-item index="2-3" @click="routerLink(2.3)">钓鱼木马</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">曝光栏</template>
                        <el-menu-item index="3-1" @click="routerLink(3.1)">生活区</el-menu-item>
                        <el-menu-item index="3-2" @click="routerLink(3.2)">缴费区</el-menu-item>
                        <el-menu-item index="3-3" @click="routerLink(3.3)">购物区</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4" @click="routerLink(4)">举报</el-menu-item>
                    <el-menu-item index="5" @click="routerLink(5)">管理中心</el-menu-item>
                </el-menu>
            </div>

            <div class="search">
                <span class="tab">
                    <el-input placeholder="搜索热门事件" style="width:18rem" v-model="searchVal">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </span>
            </div>

            <div>
                <span v-if="isShow">
                    <span class="tab" @click="redirect">登录</span>
                    <span class="tab"  @click="toregister">注册</span>
                </span>
                <span v-if="!isShow" class="tab" @click="logout()" >退出登录</span>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data () {

        return {
            index: '1',    //菜单index
            searchVal : '',   //搜索关键字
            isShow: true,   //登录注册按钮控制
        }
    },

    created () {
    },

    watch: {
        searchVal(n) {
            //搜索
        }
    },

    mounted () {
        if (localStorage.getItem('userId') || localStorage.getItem('companyId')) {
            this.isShow = false
        }
    },

    methods: {
        handleSelect(index, indexpath) {
        },

        routerLink(num) {
            switch(num) {
                case 1 : 
                    this.$router.push({ name : 'index' });
                    break;
                case 2.1 : 
                case 2.2 :
                case 2.3 :
                case 3.1 :
                case 3.2 :
                case 3.3 :
                    this.$router.push({ name : 'newsList', query : { typeIndex : num} });
                    break;
                case 4 : 
                    window.open('http://www.cyberpolice.cn/wfjb/frame/impeach/showInformation.jsp?type=0', '_blank');
                    break;
                case 5 : 
                    this.$router.push({ name : 'hrView' });
                    break;
                default : break;
            }
        },
        
        redirect () {
            this.$router.push({name: 'login'})
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
