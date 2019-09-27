<template>
    <div class="wrapper">
        <el-form ref="form" :model="form" label-position="left" label-width="50px" class="new-form">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-select v-model="form.type" style="width:300px;">
                    <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <script :id="ueId" class="ueditor-box" type="text/plain" style="width: 100%; height: 600px;">
            <div></div>
        </script>
        <div style="margin:10px 0;text-align:right;">
            <el-button size="small" @click="cancel">取消</el-button>
            <el-button type="primary" size="small" @click="handSubmit">提交</el-button>
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
            options : [ {
                label : '电信诈骗',
                value : '1'
            }, {
                label : '网络诈骗',
                value : '2'
            }, {
                label : '钓鱼木马',
                value : '3'
            }, {
                label : '生活区',
                value : '4'
            }, {
                label : '缴费区',
                value : '5'
            }, {
                label : '购物区',
                value : '6'
            } ],                              //选项列表
        }
    },

    methods : {
        cancel() {
            this.$router.push({ name : 'hrView', query : { tabName : this.tabName} });
        },

        handSubmit() {
            let self = this
            let params = {
                title : this.form.title,
                type : this.form.type,
                infotext : this.editor.getContent()
            }
            this.api.saveNews(params).then(res => {
                if (res.data.code) {
                    this.$message.success('添加成功!')
                    this.$router.push({ name : 'hrView', query : { tabName : this.tabName} })
                }
            })
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


