<style scoped>
.tree {
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: 10px;
    background: #B0F566;
}
/*.tree-body {*/
/* overflow-y: scroll;
overflow-x: hidden;*/
/*}*/
</style>
<template>
    <div class="tree">
        <Tree class="tree-body" :data="data5" :render="renderContent"></Tree>
    </div>
</template>
<script>
export default {
    data () {
        return {
            data5: [
                {
                    title: 'parent 1',
                    expand: true,
                    render: (h, { root, node, data }) => {
                        return h('span', {
                            style: {
                                display: 'inline-block',
                                width: '100%',
                                background: '#F8F8F8'
                            }
                        }, [
                            h('span', [
                                h('Icon', {
                                    props: {
                                        type: 'ios-folder-outline'
                                    },
                                    style: {
                                        marginRight: '8px'
                                    }
                                }),
                                h('span', data.title)
                            ]),
                            h('span', {
                                style: {
                                    display: 'inline-block',
                                    float: 'right',
                                    marginRight: '32px'
                                }
                            }, [
                                h('Button', {
                                    props: Object.assign({}, this.buttonProps, {
                                        icon: 'edit'
                                    }),
                                    style: {
                                        marginRight: '8px'
                                    },
                                    on: {
                                        click: () => { this.handleEdit(data) }
                                    }
                                }),
                                h('Button', {
                                    props: Object.assign({}, this.buttonProps, {
                                        icon: 'ios-plus-empty',
                                        type: 'primary'
                                    }),
                                    style: {
                                        width: '52px'
                                    },
                                    on: {
                                        click: () => { this.handleAppend(data) }
                                    }
                                })
                            ])
                        ]);
                    },
                    children: [
                        {
                            title: 'child 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1',
                                    expand: true
                                },
                                {
                                    title: 'leaf 1-1-2',
                                    expand: true
                                }
                            ]
                        },
                        {
                            title: 'child 1-2',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-2-1',
                                    expand: true
                                },
                                {
                                    title: 'leaf 1-2-1',
                                    expand: true
                                }
                            ]
                        },
                        {
                            title: 'child 1-3',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-3-1',
                                    expand: true
                                },
                                {
                                    title: 'leaf 1-3-1',
                                    expand: true
                                }
                            ]
                        }
                    ]
                }
            ],
            buttonProps: {
                type: 'ghost',
                size: 'small',
            },
            appendVal: '',
            editedVal: ''
        }
    },
    methods: {
        renderContent (h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', [
                    h('Icon', {
                        props: {
                            type: 'ios-paper-outline'
                        },
                        style: {
                            marginRight: '8px'
                        }
                    }),
                    h('span', data.title)
                ]),
                h('span', {
                    style: {
                        display: 'inline-block',
                        float: 'right',
                        marginRight: '32px'
                    }
                }, [
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-minus-empty'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.remove(root, node, data) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-plus-empty'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.handleAppend(data) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'edit'
                        }),
                        on: {
                            // click: () => { this.remove(root, node, data) }
                            click: () => { this.handleEdit(data) }
                        }
                    })

                ])
            ]);
        },
        append (data) {
            let vm = this;
            const children = data.children || [];
            children.push({
                title: vm.appendVal,
                expand: true
            });
            this.$set(data, 'children', children);
        },
        remove (root, node, data) {
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            parent.children.splice(index, 1);
        },
        editNode(data) {
            console.log(data.title);
            data.title = this.editedVal;
        },
        handleAppend (data) {
            let vm = this;
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: vm.appendVal,
                            autofocus: true,
                            placeholder: '输入节点名称'
                        },
                        on: {
                            input: (val) => {
                                vm.appendVal = val;
                            }
                        }
                    })
                },
                onOk: function() {
                    vm.append(data);
                },
                onCancel: function() {
                    console.log('cancel......');
                }
            })
        },
        handleEdit(data) {
            let vm = this;
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: data.title,
                            autofocus: true,
                            placeholder: '输入节点名称'
                        },
                        on: {
                            input: (val) => {
                                vm.editedVal = val;
                            }
                        }
                    })
                },
                onOk: function() {
                    vm.editNode(data);
                },
                onCancel: function() {
                    console.log('cancel......');
                }
            })
        }
    }
}
</script>
