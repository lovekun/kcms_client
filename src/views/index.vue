<style scoped lang="less">
    @import "~@/views/index.less";

</style>
<template>
    <div class="index">
        <Row class="index-row1" :gutter="16">
        <Col span="6" class="index-row1-col1">
        <Card class="index-row1-col1-card" :bordered="false">
        <div slot="title">
            <img src="../images/avator.png">
            <p>{{ user.username }}</p>
        </div>
        <div>最近登录时间: {{ user.lastLoginTime }}</div>
        </Card>
        </Col>
        <Col span="6" class="index-row1-col2">
        <Card class="index-row1-col2-card" :bordered="false">
        <p slot="title">当前在线人数:</p>
            <ICountUp class="index-row1-col2-card-countup"
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </Card>
        </Col>
        <Col class="index-row1-col3" span="6">
        <Card class="index-row1-col3-card" :bordered="false">
        <p slot="title">当前设备数:</p>
            <ICountUp class="index-row1-col3-card-countup"
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </Card>
        </Col>
        <Col class="index-row1-col4" span="6" style="height: 100%;">
        <Card class="index-row1-col4-card" :bordered="false" style="height: 100%;">
        <p slot="title">当前服务器数:</p>
            <ICountUp class="index-row1-col4-card-countup"
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
                />
        </Card>
        </Col>
        </Row>
        <Row class="index-row2" :gutter=16>
        <Col class="index-row2-col1" span="6">
        <Card class="index-row2-col1-card" :bordered="false">
        <Table ref="selection" :columns="columns4" :data="data1"></Table>
        </Card>
        </Col>
        <Col class="index-row2-col2" span="18">
        <Card class="index-row2-col2-card" :bordered="false">
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
