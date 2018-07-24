<style scoped lang="less">
@import "./index.less";
</style>
<template>
    <Row :gutter=16>
    <Col span="8">
    <Card :bordered="false">
    <p slot="title">{{user.username}}</p>
    <p>最近登录时间: {{ user.loginTime }}</p>
    </Card>
    </Col>
    <Col span="8">
    <Card :bordered="false">
    <p slot="title">Test7 Test</p>
    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
    </Card>
    </Col>
    <Col span="8">
    <Card :bordered="false">
    <p slot="title">No border title</p>
    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
    </Card>
    </Col>
    </Row>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch('getUser');
        }
    },
    mounted: function() {
        this.getUser();
    }


}
</script>
