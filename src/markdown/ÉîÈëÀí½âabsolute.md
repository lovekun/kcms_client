参考资料：

1. https://blog.csdn.net/devilpace/article/details/51912382
2. https://geekplux.com/2014/04/25/several_core_concepts_of_css.html
3. https://www.zhangxinxu.com/wordpress/2010/12/css-%E7%9B%B8%E5%AF%B9%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E7%B3%BB%E5%88%97%EF%BC%88%E4%B8%80%EF%BC%89/
4. https://juejin.im/post/5aed4d3951882567236ea42e
5. https://www.jianshu.com/p/a3da5e27d22b
6. https://blog.csdn.net/isaisai/article/details/45640515

绝对定位的元素会从文档流中脱离，不受其他元素的影响。其他的元素会填充它原来的位置。

当给绝对定位的元素设置偏移值时，该元素会沿着DOM树向上查找，知道找到第一个具有定位属性的祖先元素，则会相对该元素进行定位；如果没有找到，则会相对body元素进行定位。

绝对定位的元素时具有自动伸缩的功能，
如果不给他设置宽度(即默认```width: auto```)，那么该元素的宽度为其所承载的内容决定。
如果设置```width: 100%```,则该元素的宽度是相对第一个具有定位属性的祖先元素的宽度的百分比。
如果设置宽度为auto,而同时指定left和right,那么会计算 ```son-width = parent-width - left - right```;那么就可以推论得到如果left=0 && right = 0，那么子元素的宽度会自动填充父级元素的宽度。
如果我们指定子元素的宽度，那么会优先用left对子元素进行定位。
利用绝对定位元素的伸缩性，也可以很容易实现元素居中。只需设置margin: auto，绝对定位的元素就会呈现居中状态。

以上只是讨论水平方向的自动伸缩，垂直方向的原理也是一样的。

总结：绝对定位元素的特性有3点：
1. 脱离文档流
2. 相对于最近的被定位的祖先元素进行定位
3. 高度和宽度自动伸缩

