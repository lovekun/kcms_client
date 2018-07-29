# 简介
kcms系统是基于Vue.js，搭配使用iView UI组件库形成的一套前端管理系统客户端框架。


# 使用
打包：
```
npm run package
```

开发:
```
npm run dev
```

基于nodejs开发：
```
npm run pac-express
```

# 功能
+ 登录/登出
+ 组件
    - 图表
    - 可拖动组件
    - 树形组件
    - markdown编辑器
+ 表格
    - 可编辑表格
    - 水平滑动表格
    - 可导出表格
    - 多种显示方式展示的表格
+ 消息的发送与接收
+ 全屏/锁屏
+ 收缩侧边栏
+ 面包屑导航


# 技术结构
前端技术框架
1. kcms系统基于webpack工具进行打包和编译。
2. 基于vuex实现组件状态管理
3. UI基于iView UI组件库
4. 使用axios实现http对后台接口的请求
5. 使用echarts和v-charts实现图表的展示
6. markdown编辑器基于simplemde实现
7. 可拖动组件基于sortablejs和vuedraggable实现
8. 数据的动态展示效果，基于countup实现


kcms也提供了基于express的后台服务接口，数据库采用MongoDB。
