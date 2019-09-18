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
                        <li v-for="(item, index) in newData" :key="index">
                            <span class="list-title">{{item.title}}</span>
                            <span class="list-date">{{item.date}}</span>
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
            crouselImg: [
                {img: 'https://sxsimg.xiaoyuanzhao.com/3C/09/3C4A275077015CBF398443CC21774709.png'},
                {img: 'https://sxsimg.xiaoyuanzhao.com/C3/55/C35273E2AAA17DBA580304E05DF22155.png'},
                {img: 'https://sxsimg.xiaoyuanzhao.com/C6/FC/C60F54D6D175ABAF3E9A33F0FDE867FC.png'},
                {img: 'https://sxsimg.xiaoyuanzhao.com/FD/0C/FDBBBD21A98136E3054ADDD432A5020C.png'}
            ],
            newData : [],  //头条新闻列表
        }
    },

    mounted () {
        this.newData = [
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
    },

    methods: {
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
