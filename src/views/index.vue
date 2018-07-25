<style scoped lang="less">
@import "./index.less";
.iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
}
</style>
<template>
    <div>
        <Row :gutter=16 style="height: 200px">
        <Col span="8">
        <Card :bordered="false">
        <p slot="title">{{ user.username }}</p>
        <p>最近登录时间: {{ user.lastLoginTime }}</p>
        </Card>
        </Col>
        <Col span="8">
        <Card :bordered="false">
        <Table ref="selection" :columns="columns4" :data="data1"></Table>
        </Card>
        </Col>
        <Col span="8">
        <Card :bordered="false">
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

        <Row :gutter=16 style="height: 200px">
        <Col span="8">
        <Card :bordered="false">
        <p slot="title">{{ user.username }}</p>
        <p>最近登录时间: {{ user.lastLoginTime }}</p>
        </Card>
        </Col>
        <Col span="16">
        <chart></chart>
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
