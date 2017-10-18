>[sass](./sass.md)

---

# 基本用法
[Bootstrap 中文文档](http://v3.bootcss.com/)

- 响应式：媒体查询`@media`，根据不同的屏幕大小使用不同的css样式。

栅栏系统

- .container和container-fluid分别是限定宽度（媒体查询）和100%窗口大小。
    - .row 通过负margin消除container的15px padding；
    - .col 就是float:left;width:宽度%;然后（媒体查询）
    	- offset 列偏移 margin-left:同样是宽度%：向右偏移
    	- 列嵌套 则是再加上.row
    	- pull right：宽度%； push left：宽度%
 - xs、sm、md、lg（媒体查询）
	- 按顺序写，前面的会被后面的覆盖掉，再加上媒体查询，所以起作用的只能是其中一个。屏幕宽度的变化对布局的影响是跟媒体查询的样式保持一致的。