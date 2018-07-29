<style scoped lang="less">
@import "./index.less";
.iCountUp {
    font-size: 4em;
    margin: 0;
    color: #4d63bc;
}
</style>
<template>

    <div style="width: 100%;height: 100%;background: #ddd">
        <Row :gutter=16 style="height: 35%;margin: 0px;padding-top: 5px;">
        <Col span="6">
        <Card :bordered="false">
        <div slot="title" style="height: 120px;line-height: 120px">
            <img src="../images/avator.png" style="height: 60px; width: 60px;display: inline; vertical-align: middle;">
            <p style="display: inline;margin-left: 50px;font-size: 2em">{{ user.username }}</p>
        </div>
        <p>最近登录时间: {{ user.lastLoginTime }}</p>
        </Card>
        </Col>
        <Col span="6">
        <Card :bordered="false" style="height: 200px;">
        <p slot="title">当前在线人数:</p>
        <div class="iCountUp">
            <ICountUp
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </div>
        </Card>
        </Col>
        <Col span="6">
        <Card :bordered="false" style="height: 200px;">
        <p slot="title">当前设备数:</p>
        <div class="iCountUp">
            <ICountUp
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </div>
        </Card>
        </Col>
        <Col span="6">
        <Card :bordered="false" style="height: 200px;">
        <p slot="title">当前服务器数:</p>
        <div class="iCountUp">
            <ICountUp
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </div>
        </Card>
        </Col>
        </Row>
        <Row :gutter=16 style="height: 65%;width: 100%;padding-top:5px;margin: 0px;">
        <Col span="6">
        <Card :bordered="false" style="height: 300px;">
        <Table ref="selection" :columns="columns4" :data="data1" style="height: 200px;"></Table>
        </Card>
        </Col>
        <Col span="18">
        <Card :bordered="false" style="height: 300px;">
        <chart></chart>
        </Card>
        </Col>
        </Row>
    </div>

</template>
<script>
import ICountUp from 'vue-countup-v2';
import chart from '@/views/chart/chart.vue';
export default {
    components: {
        ICountUp,
        chart
    },
    data () {
        return {
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '待办事项',
                    key: 'todo'
                }
            ],
            data1: [
                {
                    todo: 'John Brown'
                },
                {
                    todo: 'Jim Green'
                },
                {
                    todo: 'Joe Black'
                },
                {
                    todo: 'Jon Snow'
                }
            ],
            startVal: 0,
            endVal: 120500,
            decimals: 0,
            duration: 2.5,
            options: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            }
        }
    },
    computed: {
        user() {
            return JSON.parse(this.$cookie.get('user'));
        }
    },
    methods: {
        onReady: function(instance, CountUp) {
            const that = this;
            instance.update(that.endVal + 100);
        }
    },
    mounted: function() {
    }
}
</script>
