<style scoped lang="less">
// css-loader 会把非根路径的url解析为相对路径，加~前缀才会解释成模块路径
@import "~@/views/login.less";
</style>

<template>
<div id="login">
	<Card class="card">
		<p slot="title">
			<Icon type="social-html5"></Icon>
			Login
		</p>
		<Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
			<FormItem prop="username" class="item">
				<Input type="text" v-model="formInline.username" placeholder="Username">
				<Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="formInline.password" placeholder="Password">
				<Icon type="ios-locked-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
				<a href="#" class="link">忘记密码</a>
				<a href="#" class="link">注册</a>
			</FormItem>
			<FormItem>
				<p class="tip">初始账号密码为: admin/admin123</p>
			</FormItem>
		</Form>
	</Card>
</div>
</template>
<script>
export default {
	data() {
		return {
			formInline: {
				username: 'admin',
				password: 'admin123'
			},
			ruleInline: {
				username: [{
					required: true,
					message: 'Please fill in the user name',
					trigger: 'blur'
				}],
				password: [{
						required: true,
						message: 'Please fill in the password.',
						trigger: 'blur'
					},
					{
						type: 'string',
						min: 6,
						message: 'The password length cannot be less than 6 bits',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		handleSubmit(name) {
			var vx = this;
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$store.dispatch('login', this.formInline)
						.then(function(value) {
							vx.$Message.success('Login Success!');
							vx.$cookie.set("user", vx.$store.state.user)
							vx.$router.push({
								name: 'main'
							});
						}).catch(function(error) {
							vx.$Message.error(error);
						});
				}
			})
		}
	}
}
</script>
