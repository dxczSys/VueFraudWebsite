<template>
    <div class="wrapper">
        <el-form ref="form" :model="form" label-position="left" label-width="50px" class="new-form">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-input v-model="form.type"></el-input>
            </el-form-item>
        </el-form>
        <script :id="ueId" class="ueditor-box" type="text/plain" style="width: 100%; height: 600px;">
            <div></div>
        </script>
        <div style="margin:10px 0;text-align:right;">
            <el-button size="small" @click="cancel">取消</el-button>
            <el-button type="primary" size="small">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editor : null,                              //编辑器实例
            ueId : 'editer' + new Date().getTime(),     //编辑器id
            form : {                                    //表单
                title : '',
                type : ''
            },
            tabName : '',                              //返回时index
        }
    },

    methods : {
        cancel() {
            this.$router.push({ name : 'hrView', query : { tabName : this.tabName} });
        }
    },

    mounted() {
        this.editor = UE.getEditor(this.ueId)

        this.tabName = this.$route.query.tabName
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 1200px;
    margin: 0 auto; 
    padding: 20px;
    background-color: #fff;
    min-height: 870px;
}
.new-form{
    width: 350px;
}
</style>


