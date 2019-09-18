<template>
    <div class="wrapper">
        <el-tabs type="border-card" v-model="tabName" tabPosition="left" style="width:1000px;height: 1000px;" class="hr">
            <el-tab-pane name="1">
                <span slot="label">轮播图管理<i class="el-icon-arrow-right"></i></span>
                <img-add></img-add>
            </el-tab-pane>

            <el-tab-pane name="2">
                <span slot="label">诈骗趣事管理<i class="el-icon-arrow-right"></i></span>
                <interest-thing :tabIndex="tabName"></interest-thing>
            </el-tab-pane>

            <el-tab-pane name="3">
                <span slot="label">曝光栏管理<i class="el-icon-arrow-right"></i></span>
                <interest-thing :tabIndex="tabName"></interest-thing>
            </el-tab-pane>

            <el-tab-pane name="4">
                <span slot="label">个人信息管理<i class="el-icon-arrow-right"></i></span>
                <setting></setting>
            </el-tab-pane>
    </el-tabs>
    </div>
</template>

<script>
import imgAdd from '../../components/imgAdd'
import interestThing from '../../components/interestThing'
import setting from '../../components/setting'
export default {
    data () {
        return {
            tabName : '1',
        }
    },

    components: {
        setting,
        imgAdd,
        interestThing,
    },

    methods : {

    }
}
</script>

<style>
.hr {
   margin: 20px auto auto auto;
}
</style>
