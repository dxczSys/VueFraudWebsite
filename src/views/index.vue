<template>
    <div class="wrapper">
        <div class="indexContain">
            <div class="cardBox">
                <el-carousel trigger="click" height="400px" style="position: sticky;">
                    <el-carousel-item v-for="(item, key) in crouselImg" :key="key">
                        <img :src="item.img" class="boxImg" >
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <!--热门职位-->
        <div class="division">
            <h3>最新头条</h3>
            <h3 style="color: #888;font-weight: 400">--- NEWS ---</h3>
            <div class="news-content">
                <div class="news-box">
                    <div class="news-title"></div>
                    <ul class="news-ul">
                        <li v-for="(item, index) in newData" :key="index" @click="routerLinks(item.id)">
                            <span class="list-title">{{item.title}}</span>
                            <span class="list-date">{{dateFormat('YYYY-mm-dd', new Date(item.cdate))}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="division">
            <h3>联系我们</h3>
            <div style="font-size:14px;">
                <span>帮助中心</span>
                <span style="padding:0 5px;">|</span>
                <span>意见反馈</span>
                <span style="padding:0 5px;">|</span>
                <span>联系我们</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            crouselImg: [],  //轮播图地址列表
            newData : [],  //头条新闻列表
        }
    },

    mounted () {
        let self = this
        this.api.getImgList().then(res => {
            if (res.data.code) {
                self.crouselImg = []
                res.data.msg.forEach(item => {
                    self.crouselImg.push({ img : item.url })
                })
            }
        })
        this.getSixNews()
    },

    methods: {
        getSixNews() {
            this.api.getSixNewsData().then(res => {
                this.newData = res.data
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

}
</script>

<style lang="scss" scoped>
.indexContain {
    width: 100%;
    height: 100%;
    border:1px solid #ededed;
    background: #fff;
}

.division {
    width: 100%;
    margin: 30px  auto;
    text-align: center;
    padding-left: 10px;
    color: #5a5a5a;
}
.cardBox {
    position: relative;
    width: 1200px;
    margin: 20px auto 30px auto;
    box-shadow: 0 10px 15px #888;
    border-radius: 6px;
}
.boxImg {
    width: 100%;
    height: 100%;
    border-radius: 6px;
}
.news-box{
    width: 1200px;
    margin: 0 auto;
    box-shadow: 0 10px 15px #888;
    border-radius: 6px;
}
.news-content{
    padding: 20px 0;
}
.news-ul{
    padding: 0 30px;
    li{
        text-align: left;
        line-height: 36px;
        cursor: pointer;
        &:hover{
            color: #409eff;
        }
    }
}
.news-title{
    background-image: url('../assets/new_title.jpg');
    height: 25px;
    background-size: 100% 100%;
    border-radius: 6px;
}
.news-content{
    background-color: #fff;
}
.list-title{
    display: inline-block;
    width: 500px;
}
.list-date{
    color: #808080;
    font-size: 12px;
}
</style>
