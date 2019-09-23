<template>
    <div class="wrapper">
        <div class="title">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in currentLocation" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="content">
            <ul class="list-news">
                <li v-for="(item1, index1) in contentData" :key="index1" class="news-item" @click="routerLinks(item1)">
                    <span class="news-title">{{item1.title}}</span>
                    <span class="news-date">{{item1.date}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index : '',         //当前位置
            contentData : [],   //列表数据
        }
    },

    computed : {
        currentLocation() {
            let arr = ''
            switch (this.index) {
                case 2.1:
                    arr = ['诈骗趣事', '电信诈骗']
                    break;
                case 2.2:
                    arr = ['诈骗趣事', '网络诈骗']
                    break;
                case 2.3:
                    arr = ['诈骗趣事', '钓鱼木马']
                    break;
                case 3.1:
                    arr = ['曝光栏', '生活区']
                    break;
                case 3.2:
                    arr = ['曝光栏', '缴费区']
                    break;
                case 3.3:
                    arr = ['曝光栏', '购物区']
                    break;
                default:
                    break;
            }
            return arr
        }
    },

    watch : {
        '$route'(to, from) {
            this.index = to.query.typeIndex
        }
    },

    methods : {
        routerLinks(item) {
            this.$router.push({ name : 'browseNews', query : {} })
        }
    },

    mounted() {
        this.index = this.$route.query.typeIndex

        this.contentData = [
            {
                title : '2019年8月举报受理处置情况',
                date : '2019-09-12'
            }, {
                title : '「净网2019」五大类诈骗，不得不防',
                date : '2019-08-29'
            }, {
                title : '2019年5-7月举报受理处置情况',
                date : '2019-08-15'
            }, {
                title : '2019年5-7月举报受理处置情况',
                date : '2019-08-15'
            }, {
                title : '2019年5-7月举报受理处置情况',
                date : '2019-08-15'
            }, {
                title : '2019年5-7月举报受理处置情况',
                date : '2019-08-15'
            }
        ]
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
}
.title{
    text-align: left;
    padding: 20px;
}
.content{
    min-height: 850px;
    margin: 0 40px;
    border: 5px solid #d7e2ec;
    border-radius: 6px;
    box-shadow: 5px 5px 15px #888;
}
.list-news{
    padding: 0 30px;
    text-align: left;
}
.news-item{
    line-height: 36px;
    & :hover{
        color: #409eff;
        text-decoration: underline;
        cursor: pointer;
    }
}
.news-title{
    display: inline-block;
    width: 600px;
    font-size: 14px;
}
.news-date{
    font-size: 13px;
    color: #808080;
}
</style>


