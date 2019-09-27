<template>
    <div class="wrapper">
        <h3 class="title">{{title}}</h3>
        <div class="content" v-html="content">aaa</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content : '',        //内容html
            title : '',          //标题
        }
    },

    mounted() {
        this.api.getNewsByid(this.$route.query.id).then(res => {
            this.content = res.data.infotext
            this.title = res.data.title
        })

    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 800px;
}
.content{
    text-align: left;
    text-indent: 2em;
}
.title{
    padding: 20px;
}
</style>


