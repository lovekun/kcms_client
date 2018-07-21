<template>
    <Breadcrumb class="top-breadcrumb">
    <BreadcrumbItem v-for="item in currentPath" :to="toPath"><span style="color: #ffffff">{{item.title}}</span></BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
    name: 'breadcrumb',
    props: {
        currentPath: {
            type: Array
        },
        toPath: {
            type: String
        }
    }
}
</script>
