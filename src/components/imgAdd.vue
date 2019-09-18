<template>
    <div class="wrapper">
        <div class="img-add">
            <el-upload list-type="picture-card" :action="url" ref="uploadpic" :limit="10" :file-list="imagesList" :on-remove="handFileRemove"
                        :on-exceed="handleExceed" :on-success="handleFileSuccess" :before-upload="deforeUpload" style="padding:10px;"
                        multiple accept="image/jpeg,image/gif,image/png,image/jpg">
                <i class="el-icon-plus"></i>
            </el-upload>
        </div>
        <div class="operate">
            <el-button type="primary" size="small">确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url : '/Law/Law/upload',    //上传文件地址
            imagesList : [],            //图片数组
            fileList : [],              //上传存放
        }
    },

    methods : {
        deforeUpload(file) {
            const fileExt = file.name.substring(file.name.lastIndexOf("."), file.name.length).toUpperCase();
            if(fileExt != ".PNG" && fileExt != ".GIF" && fileExt != ".JPG" && fileExt != ".JPEG" && fileExt != ".BMP") {
                this.$message.error('上传图片格式不对!');
                return false
            }else {
                return true
            }
        },

        handFileRemove(file, fileList) {
            this.fileList = fileList
        },

        handleExceed(files, fileList) {
            this.$message.warning('最多上传12张图片!');
        },

        handleFileSuccess(response, file, fileList) {
            if (response.code) {
                this.fileList = fileList
            }else {
                this.$message.closeAll()
                this.$message.error('上传失败!')
            }

        },
    }
}
</script>

<style lang="scss" scoped>
.img-add{
    border: 1px solid #c0ccda;
}
.operate{
    text-align: right;
    padding: 10px;
}
</style>


