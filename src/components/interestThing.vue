<template>
    <div class="wrapper">
        <div class="operate">
            <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
        </div>

        <div class="content-intere">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="标题" min-width="180" header-align="center"></el-table-column>
                <el-table-column prop="date" label="分类" width="180" align="center" header-align="center"></el-table-column>
                <el-table-column prop="date" label="创建日期" width="200" align="center" header-align="center"></el-table-column>
                <el-table-column label="操作" width="100" align="center" header-align="center">
                    <template slot-scope="scope">
                        <el-button type="text">删除</el-button>
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

    methods : {
        getTable() {

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


