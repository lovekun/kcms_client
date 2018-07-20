<style scoped lang="less">
@import '~@/views/list/list.less';
</style>
<template>
    <div class="list">
        <Form class="list-form" ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
                <Input type="text" v-model="formInline.name" placeholder="name">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
                </FormItem>
                    <Button @click="handleSelectAll(true)">Set all selected</Button>
                    <Button @click="handleSelectAll(false)">Cancel all selected</Button>
                <FormItem style="float: right;">
                <Button type="primary" @click="handleSubmit('formInline')">Search</Button>
            </FormItem>
        </Form>
        <Table height=400 style="width: 100%" class="list-table" ref="selection" :columns="columns" :data="data"></Table>
        <Page class="list-page" :total="100" show-elevator></Page>
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns: [],
            data: [],
            formInline: {
                name: ''
            },
            ruleInline: {
                name: [
                { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        },
        getList: function() {
            this.$store.dispatch('getList');
            this.columns = this.$store.state.columnName;
            this.data = this.$store.state.listData;
            console.log(this.data);
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    },
    mounted: function() {
        this.getList();
    }
}
</script>
