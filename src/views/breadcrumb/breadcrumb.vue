<template>
    <Breadcrumb>
    <BreadcrumbItem v-for="item in currentPath" :to="toPath"><span style="color: #ffffff;font-size: 16px;">{{item.title}}</span></BreadcrumbItem>
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
