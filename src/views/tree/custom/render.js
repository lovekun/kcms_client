export default {
	functional: true,
	props: {
		data: {
			type: String,
			default() {
				return "";
			}
		},
		depth: {
			type: Number
		}
	},
	render: (h, ctx) => {
		return h("div", {
			style: {
				height: "40px",
				lineHeight: "40px",
				border: "1px solid #f0f0f0",
				// 两种写法都可以 
				// marginLeft: `${ctx.props.depth * 50}px`
				"marginLeft": ctx.props.depth*20 + "px"
			},
			on: {
				click: () => {
				},
				mouseover: (e) => {
					var hoverObj = e.target;
					hoverObj.style.background = "red";
				},
				mouseout: (e) => {
					var hoverObj = e.target;
					hoverObj.style.background = "";
				}
			}
		}, [
			h("Icon", {
				props: {
					type: "chevron-right",
				},
				style: {
					marginLeft: "20px",
					display: "inline-block",
					width: "40px",
					hight: "40px"
				}
			}),
			h("span",{
				style: {
				}
			}, ctx.props.data),
			h("Button", {
				props: {
					icon: "ios-gear-outline"
				},
				style: {
					float: "right" 
				},
				on: {
					click: () => {
					}
				}
			})
		]);
	}
};
