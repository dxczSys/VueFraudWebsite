<template>
<div>
  <div class="indexContain">
  </div>


  <!--热门职位-->
  <div class="division">
    <h3>招聘人才</h3>
    <h3 style="color: #888;font-weight: 400">--- JOBS ---</h3>

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
<style>
.company-card{
  background-image: url('../../static/bg-reusme.png');
  background-size: 100% 100%;
  padding: 16px;
}
.company-card div{
  line-height: 30px;
}
.myMenu {
  position: sticky;
  top: 0;
  z-index: 100;
}

.indexContain {
  width: 100%;
  height: 100%;
  border:1px solid #ededed;
  background: #fff;
}

.cardContain {
  width: 100%;
  height: 364px;
  background: #fff;
}

.newsContain {
  padding-top: 1px;
  width: 100%;
  height: 100%;
  background: #fff;
}

.picContain {
  margin-right: 10px;
  perspective: 1000px;
}

.picContain:hover .flipper, .picContain.hover .flipper{
  transform: rotateY(180deg);
}

.picContain, .itemPic, .back{
  width: 80px;
  height: 80px;
}

.flipper {
  transition: 0.6s;
  transform-style:preserve-3d;
  position: relative;
}

.newsItem {
  display: flex;
  justify-content: flex-start;
  width: 1200px;
  margin: auto;
  height: 114px;
  text-align: left;
  color: #5a5a5a;
  font-weight: 500;
  padding-top: 15px;
  border-bottom: 1px solid #ededed;
}

.itemPic, .back {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  background: #cc0000;
  text-align: center;
  color: white;
  font-weight: 500;
  line-height: 80px;
  white-space: nowrap;
}

.itemPic {
  z-index: 2;
}

.back {
  transform: rotateY(180deg);
}

.footer {
  width: 100%;
  height: 100px;
  background: black;
  padding-top:20px
}

.footer a {
  color: white;
  text-decoration: none;
}

.aboutus  {
  width: 100%;
  height: 500px;
  background: url("https://upload-images.jianshu.io/upload_images/9381131-fd2872c9d933b2de.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240") no-repeat;
  background-size: 100% 100%;
  filter: grayscale(70%);
  opacity: 0.7;
  color: white;
  font-weight: 600;
  padding-top: 60px;
}

.aboutus p{
  margin-top: 30px;
  font-size: 18px;
}

#aboutusInfo {
  margin-top: 80px;
  animation-delay: 1s
}

.cardBox {
  position: relative;
  width: 1200px;
  margin: 20px auto 30px auto;
  box-shadow: 0 10px 15px #888;
  border-radius: 6px;
}

.wrapper-card {
  width: 1200px;
  height:1000px;
  margin: 30px auto auto auto;
  padding-top: 30px;
  text-align: left;
}

.wrapper-card .card {
  color: #07111B;
  font-size: 16px;
  width: 336px;
  height: 243px;
  float: left;
  margin: 30px;
  border-radius: 6px;
}

.wrapper-card .card:hover {
  transform: translateY(-5px);
  transition: 3ms;
  box-shadow: 5px 5px 10px #888;
}

.wrapper-card .image {
  border-radius: 6px 6px 0 0;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 6px;
}

.boxImg {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.division {
  width: 100%;
  margin: 30px  auto;
  text-align: center;
  padding-left: 10px;
   color: #5a5a5a;
}

.footer img{
  width:25px;
  height: 25px;
  margin-right: 10px
}

.footer span {
  margin-right: 20px;
}

.recommand {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 36px 0;
  font-size: 18px;
}

.recommandList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #5a5a5a;
  font-weight: 500;
}

.recommandInfo {
  margin-left: 16px;
}

.recommandInfo p {
  margin-bottom: 6px;
}

.el-progress__text {
  font-size: 16px !important;
  text-align: center !important;
}

.el-carousel-item {
  display: flex;
  justify-content: space-around;
}

.el-carousel {
  width: 1200px;
  margin: 0 auto;
}

.recommandJob {
  border: 1px solid #ebebeb;
  text-align: left;
  color: #fff;
  line-height: 30px;
  background: linear-gradient(#948E99, #2E1437);
  border-radius: 4px;
  width: 150px;
  height: 180px;
  padding: 20px 10px 10px;
  font-weight: bold;
}

.mytable {
  width: 100%;
  height: 700px;
}

.progress2 {
  width: 182px;
  border: 0;
}

</style>
<script>
import fetch from '../api/fetch'
export default {
  data () {
    return {
      crouselImg: [
        {img: 'https://sxsimg.xiaoyuanzhao.com/3C/09/3C4A275077015CBF398443CC21774709.png'},
        {img: 'https://sxsimg.xiaoyuanzhao.com/C3/55/C35273E2AAA17DBA580304E05DF22155.png'},
        {img: 'https://sxsimg.xiaoyuanzhao.com/C6/FC/C60F54D6D175ABAF3E9A33F0FDE867FC.png'},
        {img: 'https://sxsimg.xiaoyuanzhao.com/FD/0C/FDBBBD21A98136E3054ADDD432A5020C.png'}

      ],
      activeIndex2: '1',
      currentDate: '完美',
      company: '',
      companyList: [],
      companyListTotal : [],
      JobListTotal :[],
      JobLists :[],
      jobList: [],
      recommandList: [],
      isHr: localStorage.getItem('role') === '1',
      isLogin: localStorage.getItem('token') ? true : false,
      isShow:  false,
      getResumeList: {
          name: '',
          sex: '',
          age: '',
          skills: [{
            id: 1,
            name: '',
            level: '',
            resumeId: 1
          }],
          school: '',
          address: '',
          endTime: 2019,
          phone: '',
          email: '',
          introduce: '',
          experience: '',
          awards: '',
          avatar: ''
        },
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handler)
    this.getCompany()
    this.getJobinfo()
    this.getJob()
    this.getRecommand()
  },
  methods: {
    openChat() {
      this.$router.push({
        name : 'chat'
      })
    },
    handler() {
      let info = document.getElementById('aboutusInfo') || null
      let card = document.getElementsByClassName('temp')[0] || null
      if (info === null || card === null) {
          return;
      }
      else if (document.documentElement.scrollTop > 1000) {
         card.classList.add('animated')
         card.classList.add('bounceInLeft')
         info.classList.add('animated')
         info.classList.add('bounceInLeft')
      } else {
        info.classList.remove('animated')
        info.classList.remove('bounceInLeft')
        card.classList.remove('animated')
        card.classList.remove('bounceInLeft')
      }
    },

    jobDetail (id) {
      localStorage.setItem('jobId', id)
      this.$router.push({name: 'jobInfo'})
    },

    getJob () {
      fetch.findJob().then(res => {
        if (res.status === 200) {
          if (res.data.success === true) {
            this.jobList = res.data.data.recruitList
          }
        }
      }).catch(e => {
        console.log(e)
      })
    },

    getCompany () {
      let self = this
      fetch.getCompany1().then(res => {
        if (res.status === 200) {
            this.companyListTotal = res.data.msg
            this.companyList = this.companyListTotal.slice(0, 3)
            const timer = setInterval(_ => {
              self.companyList = self.companyListTotal.slice(0, 3)
              self.companyListTotal.splice(0, 3)
              self.companyListTotal.push(...self.companyList)
            }, 3000)
            this.$once('hook:beforeDestroy', _ => {
              clearInterval(timer)
            })
        }
      })
    },

    getJobinfo () {
      let self = this
      fetch.getJobinfo1().then(res => {
        if (res.status === 200) {
            this.JobListTotal = res.data.msg
            this.JobLists = this.JobListTotal.slice(0, 3)
            const timer = setInterval(_ => {
              self.JobLists = self.JobListTotal.slice(0, 3)
              self.JobListTotal.splice(0, 3)
              self.JobListTotal.push(...self.JobLists)
            }, 3000)
            this.$once('hook:beforeDestroy', _ => {
              clearInterval(timer)
            })
        }
      })
    },
   
    getCompanyDetail (id) {
      localStorage.setItem('companyName', id)
      this.$router.push({name: 'companyDetail'})
    },
    // 获取推荐列表
    getRecommand () {
      if (this.isLogin) {
        if (this.isHr) {
        fetch.recommendCandidate().then(res => {
          if (res.status === 200) {
            this.recommandList = res.data.data
          }
        })
      } else {
        fetch.recommendJob().then(res => {
        if (res.status === 200) {
          this.recommandList = res.data.data
        }
      })
      }
    }
  },
  // 查看推荐候选人
  getTableList(id) {
      this.isShow = true
        fetch
          .getResume(id)
          .then(res => {
            if (res.status === 200) {
              if (res.data.success === true) {
                if (res.data.data !== null) {
                  this.getResumeList = res.data.data
                }
              }
            }
          })
          .catch(e => {
            console.log(e)
          })
      }
},

}
</script>
