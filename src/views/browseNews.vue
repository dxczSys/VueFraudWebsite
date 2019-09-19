<template>
    <div class="wrapper">
        <div class="content" v-html="content">aaa</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content : ''        //内容html
        }
    },

    mounted() {
        // this.$route.query.id
    }
}
</script>

<style lang="scss" scoped>
.content{
    width: 1200px;
}
</style>


