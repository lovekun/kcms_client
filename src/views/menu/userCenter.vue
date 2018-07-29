<template>
    <Dropdown transfer placement="bottom-start" trigger="hover" @on-click="userMenuSelect">
    <Button type="text">
        <Icon :size="20" type="android-person"></Icon>
        <span style="margin-right: 15px;margin-left: 10px;">{{ username }}</span>
    </Button>
    <DropdownMenu class="top-user-menu-item" style="width: 200px" slot="list">
    <DropdownItem name="userCenter">个人中心</DropdownItem>
    <DropdownItem name="logout">退出</DropdownItem>
    </DropdownMenu>
    </Dropdown>
</template>
<script>
export default {
    name: 'userCenter',
    computed: {
        username() {
            return JSON.parse(this.$cookie.get('user')).username;
        }
    },
    methods: {
        userMenuSelect(name) {
            this.$emit('userMenuSelect', name);
        }
    }
}
</script>
