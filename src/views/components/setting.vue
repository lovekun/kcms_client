<template>
    <div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">选择页面布局方式</p>
            <RadioGroup v-model="vertical" vertical @on-change="changeMenu">
		        <Radio label="main0">
		            <span>菜单栏左侧展开</span>
		        </Radio>
		        <Radio label="main2">
		            <span>菜单栏顶部展开</span>
		        </Radio>
		        <Radio label="main1">
		            <span>菜单栏顶部展开，工具栏左侧展开</span>
		        </Radio>
		    </RadioGroup>
        </Card>
	</div>
    </div>
    
</template>
<script>
    import global_ from '../../util/global.vue';
	export default {
		data () {
            return {
                vertical: window.localStorage.getItem('mainPageType')
            }
        },
        methods: {
        	changeMenu: function(data) {
                if(window.localStorage) {  
                    // localStorge可用
                    var localStorage = window.localStorage;  
                    // 存储  
                    localStorage.setItem("mainPageType",data); 
                }else {
                    
                }
        	}
        }
	}
</script>
