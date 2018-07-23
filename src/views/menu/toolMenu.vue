<template>
    <div>
        <Button type="text">
            <Icon :size="25" color="white" type="email"></Icon>
        </Button>
        <Button type="text">
            <Icon :size="18" color="white" type="locked"></Icon>
        </Button>
        <Button type="text">
            <Icon :size="25" color="white" type="arrow-expand"></Icon>
        </Button>
        <Input icon="ios-search" placeholder="search..." style="width: 200px"></Input>
    </div>
</template>
<script>
export default {
    name: 'toolMenu',
    methods: {
        userMenuSelect(name) {
            this.$emit('userMenuSelect', name);
        }
    }
}
</script>
