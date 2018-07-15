export default {
    functional: true,
    props: {
        data: {
            type: String,
            default() {
                return '';
            }
        },
        depth: {
            type: Number
        }
    },
    render: (h, ctx) => {
        console.log(ctx.props.depth);
        return h('div', {
            style: {
                height: '40px',
                lineHeight: '40px',
                border: '1px solid #f0f0f0',
                // 两种写法都可以 
                // marginLeft: `${ctx.props.depth * 50}px`
                'marginLeft': ctx.props.depth*20 + 'px'
                //transform: `translate(${ctx.props.depth * 50}px)`,
            },
        // },ctx.props.data);
        }, [
            h('Button', {
                props: {
                    icon: 'arrow-right-b',
                },
                style: {
                    width: '100px',
                    hight: '40px'
                }
            }),
            h('span',{
                style: {
                }
            }, ctx.props.data)
        ]);
    }
}
