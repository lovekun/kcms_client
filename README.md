# 项目介绍
kcms系统是基于Vue.js，搭配使用iView UI组件库形成的一套前端管理系统客户端框架。

# 软件架构
软件架构说明:
前端技术框架
1. kcms系统基于webpack工具进行打包和编译。
2. 基于vuex实现组件状态管理
3. UI基于iView UI组件库
4. 使用axios实现http对后台接口的请求
5. 使用echarts和v-charts实现图表的展示
6. markdown编辑器基于simplemde实现
7. 可拖动组件基于sortablejs和vuedraggable实现
8. 数据的动态展示效果，基于countup实现

后端技术框架:

kcms也提供了基于express的后台服务接口，数据库采用MongoDB。

项目功能:

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

# 安装教程
安装依赖：
```
npm install
```

打包：
```
npm run package
```

# 使用说明
开发:
```
npm run dev
```

基于nodejs开发：
```
npm run pac-express
```

# webpack 配置信息
## 插件配置
1. html-webpack-plugin
  提供html模板，自动生成引入了打包后的js的html，并放置在dist下

2. clean-webpack-plugin
  打包前，清空dist目录

3. splitChunks
  分包，现在对所有的依赖包采用默认配置，导致打出来的第三方包太大，还需要优化。

4. entry
  单页面应用，就用一个entry就够了。之前会把第三方包的引入单独写在一个js文件中，手动做分包，配合splitChunks进行分包，感觉这种设计并不好。

5. 热编译
  是否用 HotModuleReplacementPlugin 插件，以及dev-server是否用hot属性，inline属性

6. webpack.DefinePlugin
  配置的 HAS_SERVER 这个全局变量，actions.js 中会根据这个变量改变请求数据的方式

7. webpack.ProvidePlugin
  定义了两个jquery,这样就不需要在js里再次引入了。

# mock数据
目前选择mockjs + fakejs。

其他可选方案包括mockserver, jsonserver, moco

# 单元测试
Mocha

# 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

# TODO
目前更新了配置，新加两种一种local，一种pro, local使用devServer 插件，用于开发， pro 打包，放置于express服务目录中，用于身材环境。这两种配置待进一步配置，配置完成后，将取代其他配置
