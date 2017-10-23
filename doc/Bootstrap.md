>[sass](./sass.md)
>《深入理解Bootstrap》

---

# 基本用法
[Bootstrap 中文文档](http://v3.bootcss.com/)

什么是响应式？
什么是弹性式？
高度宽度？
单位？
justify

[Content_categories](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)

[cite](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite)引用里面的引用:

```html
<blockquote>
	<p>
		滚滚长江东逝水，浪花淘尽英雄。
		是非成败转头空。
		青山依旧在，几度夕阳红。
		白发渔樵江渚上，惯看秋月春风。
		一壶浊酒喜相逢。
		古今多少事，都付笑谈中。
	<cite>临江仙·滚滚长江东逝水杨慎</cite>
	</p>
</blockquote> 
```
text-overflow:如果超过width就自动隐藏
textarea 的尺寸控制
$.proxy();

[kbd](http://devdocs.io/html/element/kbd)

nth-child选择器实现table背景条纹striped

fieldset
legend
label
[white-space: nowrap]()

## 栅栏系统

- 响应式：媒体查询`@media`，根据不同的屏幕大小使用不同的css样式。
- .container和container-fluid分别是限定宽度（媒体查询）和100%窗口大小。
    - .row 通过负margin消除container的15px padding；
    - .col 就是float:left;width:宽度%;然后（媒体查询）
    	- offset 列偏移 margin-left:同样是宽度%：向右偏移
    	- 列嵌套 则是再加上.row
    	- pull right：宽度%； push left：宽度%
 - xs、sm、md、lg（媒体查询）
	- 按顺序写，前面的会被后面的覆盖掉，再加上媒体查询，所以起作用的只能是其中一个。屏幕宽度的变化对布局的影响是跟媒体查询的样式保持一致的。
- div.clearfix visible-* 清除浮动影响 设定起作用的屏宽

# 整体思路
- Append 
- Overwrite

---
- 基础样式 border padding margin 大小边距
- 颜色 一组的颜色搭配统一：同时考虑link 

#### IFE
- 让一个函数声明语句变成了一个表达式。
- 任何消除函数声明和函数表达式间歧义的方法，都可以被解析器正确识别
- 一元运算都是有效的

```js
	(function(){/**/})();//****推荐，因为性能
	!function(){/**/}();
	+function(){/**/}();
```
