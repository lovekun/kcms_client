<style scoped>


</style>
<template>
    <div style="position: absolute;top: 10px;bottom: 10px;left: 10px;right: 10px;">
        <Row>
            <Col span="8">
                <Card :bordered="false">
                <p slot="title">{{user.username}}</p>
                <p>最近登录时间: {{ user.loginTime }}</p>
                </Card>
            </Col>
            <Col offset="1" span="3">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </Col>
            <Col offset="1" span="3">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </Col>
            <Col offset="1" span="3">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </Col>
            <Col offset="1" span="3">
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
