<template>
    <div class="wrapper">
        <div class="operate">
            <el-button type="primary" size="small" icon="el-icon-plus" @click="routerLink">新增</el-button>
        </div>

        <div class="content-intere">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="index" align="center" header-align="center"></el-table-column>
                <el-table-column prop="title" label="标题" min-width="180" header-align="center"></el-table-column>
                <el-table-column label="分类" width="180" align="center" header-align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.type == '1'">电信诈骗</span>
                        <span v-if="scope.row.type == '2'">网络诈骗</span>
                        <span v-if="scope.row.type == '3'">钓鱼木马</span>
                        <span v-if="scope.row.type == '4'">生活区</span>
                        <span v-if="scope.row.type == '5'">缴费区</span>
                        <span v-if="scope.row.type == '6'">购物区</span>
                    </template>
                </el-table-column>
                <el-table-column label="创建日期" width="200" align="center" header-align="center">
                    <template slot-scope="scope">
                        {{dateFormat('YYYY-mm-dd', new Date(scope.row.cdate))}}
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="100" align="center" header-align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="deleteNews(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        tabIndex : {
            type : String,
            default : '2'
        }
    },
    data() {
        return {
            tableData : [],   //表格数据
        }
    },

    mounted() {
        this.getTable()
    },

    methods : {
        getTable() {
            let self = this
            this.api.getNewsList().then(res => {
                self.tableData = res.data
            })
        },

        routerLink() {
            this.$router.push({ name : 'addNews' , query : { tabName : this.tabIndex }})
        },

        deleteNews(item) {
            //删除接口 你删了个锤子？
            let self = this
            this.api.delNews(item).then(res => {
                if (res.data.code) {
                    self.$message.success('删除成功！')
                    self.getTable()
                }
            })
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
    }
}
</script>

<style lang="scss" scoped>
.operate{
    text-align: left;
}
.content-intere{
    margin-top: 10px;
}
</style>


