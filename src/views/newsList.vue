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
                <li v-for="(item1, index1) in contentData" :key="index1" class="news-item" @click="routerLinks(item1.id)">
                    <span class="news-title">{{item1.title}}</span>
                    <span class="news-date">{{dateFormat('YYYY-mm-dd', new Date(item1.cdate))}}</span>
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
            this.getNewsData()
        }
    },

    methods : {
        getNewsData() {
            let num = '0'
            switch(this.index) {
                case 2.1 : num = '1'; break;
                case 2.2 : num = '2'; break;
                case 2.3 : num = '3'; break;
                case 3.1 : num = '4'; break;
                case 3.2 : num = '5'; break;
                case 3.3 : num = '6'; break;
                default : break;
            }
            this.api.getOnlyNewsList(num).then(res => {
                this.contentData = res.data
            })
        },
        routerLinks(item) {
            this.$router.push({ name : 'browseNews', query : {id : item} })
        },

        dateFormat(fmt, date) {
		    let ret
		    let opt = {
		        "Y+": date.getFullYear().toString(),       
		        "m+": (date.getMonth() + 1).toString(),     
		        "d+": date.getDate().toString(),            
		        "H+": date.getHours().toString(),           
		        "M+": date.getMinutes().toString(),         
		        "S+": date.getSeconds().toString()         
		    }
		    for (let k in opt) {
		        ret = new RegExp("(" + k + ")").exec(fmt);
		        if (ret) {
		            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		        }
		    }
		    return fmt
		}
    },

    mounted() {
        this.index = this.$route.query.typeIndex
        this.getNewsData()
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


