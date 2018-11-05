<template>
    <Breadcrumb>
    <BreadcrumbItem v-for="item in currentPath" :to="toPath"><span style="font-size: 10px;">{{item.title}}</span></BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
export default {
	name: "breadcrumb",
	props: {
		currentPath: {
			type: Array
		},
		toPath: {
			type: String
		}
	}
};
</script>
