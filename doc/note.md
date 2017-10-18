# Tips

1.	PhoneGap / Cordova、AppCan、DCloud / APICloud，都是基于 WebKit 扩展的；
Weex 在 WebKit 与原生上实现了一个抽象层；
2.	NativeScript、React Native 基于原生实现了自己的统一 API；
3.	推荐前端入门跨平台 App 开发先学 Cordova，最简单、正规，社区最大

---

# CSS
border的样式很重要
if `border：none;` 浏览器不会渲染border; 只有宽度，没有样式，也不会渲染, 所以一定要有样式才有效。 

## 盒子模型
每个元素

- **目前**是矩形
- 可选：Margin、border、padding
    - 各自又有top、right、bottom、left
- 两种模式：
    - content
    - border + padding + content

## 行内元素（inline）和块级元素（block）

> [说说行内元素和块级元素](http://www.jianshu.com/p/d69878549d92)

- 如果没有其他属性设置，inline是**包裹**里面的文字或图片，尽量收缩，不换行；而block是撑，尽量撑满parent容器，默认宽度是parent容器的宽度，独占一行。
- inline只能容纳文本或者其他内联元素；block能容纳其他块元素或者内联元素。
- inline margin padding left 和 right 可以改变；block高度，行高以及顶和底边距都可以控制；

> 行内元素：a - 锚点； abbr - 缩写； acronym - 首字； b - 粗体（不推荐）； bdo - bidi override； big - 大字体； br - 换行； cite - 引用； code - 计算机代码（在引用源码的时候需要）； dfn - 定义字段； em - 强调； font - 字体设定（不推荐）； i - 斜体； img - 图片； input - 输入框； kbd - 定义键盘文本； label - 表格标签； q - 短引用； s - 中划线（不推荐）； samp - 定义范例计算机代码； select - 项目选择； small - 小字体文本； span - 常用内联容器，定义文本内区块； strike - 中划线； strong - 粗体强调； sub - 下标； sup - 上标； textarea - 多行文本输入框； tt - 电传文本； u - 下划线； var - 定义变量；

> 块级元素： address - 地址； blockquote - 块引用； center - 举中对齐块； dir - 目录列表； div - 常用块级容易，也是css layout的主要标签； dl - 定义列表； fieldset - form控制组； form - 交互表单； h1 - 大标题； h2 - 副标题； h3 - 3级标题； h4 - 4级标题； h5 - 5级标题； h6 - 6级标题； hr - 水平分隔线； isindex - input prompt； menu - 菜单列表； noframes - frames可选内容（对于不支持frame的浏览器显示此区块内容）； noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）； ol - 排序列表； p - 段落； pre - 格式化文本； table - 表格； ul - 非排序列表； 


## 浮动
标准文档流和浮动流
在标准文档流中Inline元素和Block元素是两个基本元素。
从上到下，从左到右，浮动使之脱离标准文档流。
浮动用来设置文字环绕，也可以用来布局；**bootstrap栅栏系统**
- [清除浮动](http://nicolasgallagher.com/micro-clearfix-hack/)
- 浮动float所产生的塌陷
    - [利用:after伪类元素清除](http://www.html-js.com/article/2203)
    - [Why does overflow hidden stop floating elements escaping their container?](https://stackoverflow.com/questions/9193214/why-does-overflow-hidden-stop-floating-elements-escaping-their-container)
    - [BFC 块级格式化上下文](http://web.jobbole.com/83149/)+ [CSS之BFC详解](http://www.html-js.com/article/1866)
        
        BFD特性：
        1. 内部的Box会在垂直方向，从顶部开始一个接一个地放置。
        1. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生叠加
        1. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
        1. BFC的区域不会与float box叠加。
        1. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
        1. 计算BFC的高度时，浮动元素也参与计算。
        
        作用

        1. 解决margin叠加问题 
        1. 布局[CSS之BFC详解](http://www.html-js.com/article/1866)
        1. 用于清除浮动，计算BFC高度.
        
        `overflow: hidden;`只是创建BFC的方式之一，比较常用。
        - `display: table` 可能引发响应性问题
        - `overflow: scroll` 可能产生多余的滚动条
        - `float: left` 将把元素移至左侧，并被其他元素环绕
        - `overflow: hidden` 将裁切溢出元素


Inline-block和浮动布局的区别？
@font-face
动画
JavaScript
console.log(a)//[Function: a]
a();//10
var a = 3;
function a() {
    console.log(10)
}
console.log(a)//3
a = 6;
a();//TypeError: a is not a function
参考书目
	
《JavaScript权威指南》目录
前言
第1章 JavaScript概述
1.1 JavaScript语言核心
1.2 客户端JavaScript
第一部分 JavaScript 语言核心
第2章 词法结构
2.1 字符集
2.2 注释
2.3 直接量
2.4 标识符和保留字
2.5 可选的分号
第3章 类型、值和变量
3.1 数字
3.2 文本
3.3 布尔值
3.4 null和undefined
3.5 全局对象
3.6 包装对象
3.7 不可变的原始值和可变的对象引用
3.8 类型转换
3.9 变量声明
3.10 变量作用域
第4章 表达式和运算符
4.1 原始表达式
4.2 对象和数组的初始化表达式
4.3 函数定义表达式
4.4 属性访问表达式
4.5 调用表达式
4.6 对象创建表达式
4.7 运算符概述
4.8 算术表达式
4.9 关系表达式
4.10 逻辑表达式
4.11 赋值表达式
4.12 表达式计算
4.13 其他运算符
第5章 语句
5.1 表达式语句
5.2 复合语句和空语句
5.3 声明语句
5.4 条件语句
5.5 循环
5.6 跳转
5.7 其他语句类型
5.8 JavaScript语句小结
第6章 对象
6.1 创建对象
6.2 属性的查询和设置
6.3 删除属性
6.4 检测属性
6.5 枚举属性
6.6 属性getter和setter
6.7 属性的特性
6.8 对象的三个属性
6.9 序列化对象
6.10 对象方法
第7章 数组
7.1 创建数组
7.2 数组元素的读和写
7.3 稀疏数组
7.4 数组长度
7.5 数组元素的添加和删除
7.6 数组遍历
7.7 多维数组
7.8 数组方法
7.9 ECMAScript 5中的数组方法
7.10 数组类型
7.11 类数组对象
7.12 作为数组的字符串
第8章 函数
8.1 函数定义
8.2 函数调用
8.3 函数的实参和形参
8.4 作为值的函数
8.5 作为命名空间的函数
8.6 闭包
8.7 函数属性、方法和构造函数
8.8 函数式编程
第9章 类和模块
9.1 类和原型
9.2 类和构造函数
9.3 JavaScript中Java式的类继承
9.4 类的扩充
9.5 类和类型
9.6 JavaScript中的面向对象技术
9.7 子类
9.8 ECMAScript 5 中的类
9.9 模块
第10章 正则表达式的模式匹配
10.1 正则表达式的定义
10.2 用于模式匹配的String方法
10.3 RegExp对象
第11章 JavaScript的子集和扩展
11.1 JavaScript的子集
11.2 常量和局部变量
11.3 解构赋值
11.4 迭代
11.5 函数简写
11.6 多catch 从句
11.7 E4X: ECMAScript for XML
第12章 服务器端JavaScript
12.1 用Rhino脚本化Java
12.2 用Node实现异步I/O

第二部分 客户端JavaScript
第13章 Web浏览器中的JavaScript
13.1 客户端JavaScript
13.2 在HTML里嵌入JavaScript
13.3 JavaScript程序的执行
13.4 兼容性和互用性
13.5 可访问性
13.6 安全性
13.7 客户端框架
第14章 Window对象
14.1 计时器
14.2 浏览器定位和导航
14.3 浏览历史
14.4 浏览器和屏幕信息
14.5 对话框
14.6 错误处理
14.7 作为Window对象属性的文档元素
14.8 多窗口和窗体
第15章 脚本化文档
15.1 DOM概览
15.2 选取文档元素
15.3 文档结构和遍历
15.4 属性
15.5 元素的内容
15.6 创建、插入和删除节点
15.7 例子：生成目录表
15.8 文档和元素的几何形状和滚动
15.9 HTML表单
15.10 其他文档特性
第16章 脚本化CSS
16.1 CSS概览
16.2 重要的CSS属性
16.3 脚本化内联样式
16.4 查询计算出的样式
16.5 脚本化CSS类
16.6 脚本化样式表
第17章 事件处理
17.1 事件类型
17.2 注册事件处理程序
17.3 事件处理程序的调用
17.4 文档加载事件
17.5 鼠标事件
17.6 鼠标滚轮事件
17.7 拖放事件
17.8 文本事件
17.9 键盘事件
第18章 脚本化HTTP
18.1 使用XMLHttpRequest
18.2 借助发送HTTP请求：JSONP
18.3 基于服务器端推送事件的Comet技术
第19章 jQuery类库
19.1 jQuery基础
19.2 jQuery的getter和setter
19.3 修改文档结构
19.4 使用jQuery处理事件
19.5 动画效果
19.6 jQuery中的Ajax
19.7 工具函数
19.8 jQuery选择器和选取方法
19.9 jQuery的插件扩展
19.10 jQuery UI类库
第20章 客户端存储
20.1 localStorage和sessionStorage
20.2 cookie
20.3 利用IE userData持久化数据
20.4 应用程序存储和离线Web应用
第21章 多媒体和图形编程
21.1 脚本化图片
21.2 脚本化音频和视频
21.3 SVG：可伸缩的矢量图形
21.4 中的图形
第22章 HTML5 API
22.1 地理位置
22.2 历史记录管理
22.3 跨域消息传递
22.4 Web Worker
22.5 类型化数组和ArrayBuffer
22.6 Blob
22.7 文件系统API
22.8 客户端数据库
22.9 Web套接字

第三部分 JavaScript核心参考
JavaScript核心参考

第四部分 客户端JavaScript参考
客户端JavaScript参考

数据类型

asdf
变量用var和不用var的区别
ES6 变量作用域与提升：变量的生命周期详解
1.	不用var是全局变量的属性；可以用delete删除【属性】；不能变量提升
2.	用var是变量；不可以用delete删除；会变量提升；是局部变量。
3.	‘use strict’模式下不使用var会报错。
    console.log(a);//[Function: a]
    a();//函数提升
    var a = "变量已赋值";
    console.log(a);//变量已赋值
    function a(){
        console.log("函数提升");
    }
    a = 3;
    console.log(a);//3
    a();//报错：a is not a function



>JavaScript数据类型和数据结构
ECMAScript 6定义了7种数据类型
1.	原始类型（值本身无法被改变）（primitive value）
a)	Boolean：0、NaN、undefined、null、””表示false，否则是true
b)	Null：未初始化的Object
c)	Undefined：未初始化的原始类型
d)	Number：0八位、0x十六位
e)	String
f)	Symbol（ECMAScript 6）
2.	Object
变量作用域
一个变量的作用域是程序源代码中定义这个变量的区域。全局变量和局部变量
ES6 变量作用域与提升：变量的生命周期详解
关于变量提升还有函数提升：使用定义式则是赋值也提升了，如果使用表达式就如同使用var的变量一样，只是声明提升了而没有赋值，是undefined。


let的用法 新增的块级作用域。之前只有
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // 不同的变量
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

表达式和运算符
$$ and ||

$("#btshow").click(function (e) {
    /*
    《JavaScript权威指南》p80：
        &&短路运算符 和||并不是返回true或者false
        A && B 
        - if A=false => A, =>C
        - if A=true => B,{
                        - if B = true => B
                        - if B = false => C 
                        }
    */
    var isA = !!($._data);
    var isB = !!($._data($(document)[0], "events"));
    var isC = !!($.data($(document)[0], "events"));

    var _arr_events = $._data && $._data($(document)[0], "events") || '$.data($(document)[0], "events")';
    for (key in _arr_events) {
        show(key + "事件数量：" + _arr_events[key].length);
    }
})


语句
for in针对的是普通对象，有一下弊端：
1.	key是字符串而不是数字
2.	会遍历自有属性，顺着原型链
3.	可能是随机的而不是按照所谓Array的方式
for of针对这些做了极大的优化
1.	更适合遍历数组
对象
Delete 属性
原型对象、类和继承
原型是一个实例对象。
对象
JavaScript密码花园

hasOwnProperty判断自有属性

猴子补丁：
这个叫法起源于Zope框架，大家在修正Zope的Bug的时候经常在程序后面追加更新部分，这些被称作是“杂牌军补丁(guerilla patch)”，后来guerilla就渐渐的写成了gorllia((猩猩)，再后来就写了monkey(猴子)，所以猴子补丁的叫法是这么莫名其妙的得来的。
猴子补丁主要有以下几个用处：

1.	在运行时替换方法、属性等
2.	在不修改第三方代码的情况下增加原来不支持的功能
3.	在运行时为内存中的对象增加patch而不是在磁盘的源代码中增加

原型和原型的好处：

数组
Array
判断是否是数组的方法是看类属性（是对象的三个属性之一：原型、类、可扩展）
//对象&&对象类型
function isArray(obj) {
    return Array.isArray(obj) || function (obj) {
        return typeof obj === "object" && Array.prototype.toString.call(obj) === "[object Array]";
    };
}
函数
可以被定义，可以被调用，是一种语法，也是一种值，可以被程序操作，可以作为函数的参数。
自执行匿名函数（Self-executing anonymous function）或者立即调用的函数表达式（Immediately-Invoked Function Expression）
JavaScript匿名函数与自执行 ：匿名函数的作用创建闭包和减少全局变量（防止污染命名空间）
深入理解JavaScript系列（4）：立即调用的函数表达式。表达式和function声明，表达式是一个引用，没有立即执行。
(function(){/*code*/})();
prototype 和__proto__的区别是什么？
Mozilla’s implementation of JavaScript has (since the early days of Netscape) exposed the prototype attribute through the specially named __proto__ property, and you can use this property to directly query or set the prototype of any object. Using __proto__ Core JavaScript is not portable: it has not been (and probably never will be) implemented by IE or Opera, although it is currently supported by Safari and Chrome. Versions of Firefox that implement ECMAScript 5 still support __proto__, but restrict its ability to change the prototype of nonextensible objects.
简单说就是不建议直接使用object的__proto__来修改constructor function的prototype。

constructor function有prototype，使用new 关键字返回的对象有__proto__

        // 有一堆原材料就是自有变量
        var Calculator = function (decimalDigits, tax) {
            this.decimalDigits = decimalDigits;
            this.tax = tax;
        };
        // 交给谁来处理是可以切换的
        var one = {
            describe: function () {
                return console.log("original describe");
            },
            add: function (x, y) {
                return console.log(x + y);
            },
            subtract: function (x, y) {
                return console.log(x - y);
            }
        };
        var two = {
            describe: function () {
                return console.log("original describe");
            }, multiply: function (x, y) {
                return console.log(x * y);
            },
            divide: function (x, y) {
                return console.log(x / y);
            }
        };
        Calculator.prototype = one;
        var oneCalculator = new Calculator();
        oneCalculator.add(1, 2);
        oneCalculator.subtract(1, 2);
        // or
        Calculator.prototype = two;
        var twoCalculator = new Calculator();
        twoCalculator.multiply(1, 2);
        twoCalculator.divide(1, 2);

        twoCalculator.__proto__.describe = function () {
            return console.log("describe has changed");
        }
        // 实例对象有__proto__属性；
        console.log(Calculator.prototype===twoCalculator.__proto__);
        one.describe();
        two.describe();
        //改变的是原型所以two和three都被改变
        var three = new Calculator();
        three.describe();
        //改变的只是three的describe
        three.describe = function () {
            return console.log("three describe has changed");
        };
        //所以four不变
        var four = new Calculator();
        three.describe();
        four.describe();
        //使用new不会重新生成原型上的实例
¬¬¬¬¬¬¬
this
使用准则： 
1.	作为函数调用this指代全局对象（^strict）或者undefined（strict）；
这个特性倒是可以用来区别当前是否是strict模式：
var isStrict = (function(){return !this})();
2.	作为方法调用指代调用的对象本身；
3.	作为构造函数this指代构造对象本身，跟2的方式不同。即new object.constructor()中的this（调用上下文）并不是object而是constructor()返回的对象；
4.	作为间接调用call()、apply()，显示指定this。另外也可以理解成上面的三种是第四种的语法糖，因为都可以用第四种表示出来而且没有异议。
    function f(argument) {
        console.log(this);
    }

    var ar = [f,f];
    ar[0]();
    ar[0].call(ar);
    var obj = {a:"obj"};
    obj.f = f;
    obj.f();
    obj.f.call(obj);
可变参数和默认值
JavaScript没有对参数类型进行检查，TypeScript用于解决这样的问题。而JavaScript通过自身来完成类型的检查是十分繁琐而且看起来不可或缺。我也很无奈啊┓( ´∀` )┏ 动态语言不就是这点爽吗？实参与形参数量上不对付。
可变参数arguments
arguments 是类数组对象，以数字作为key。通过以下方法转换为真·数组：
主要是使用
let args = Array.prototype.slice.call(arguments); 
or
let args = Array.from(arguments);
let args = [...arguments];
ES6的新方法
            function containsAll(haystack, ...needles) {
                for (var needle of needles) {
                    if (haystack.indexOf(needle) === -1) {
                        return false;
                    }
                } return true;
            }
以下是不推荐使用的arguments方法：
	arguments.callee()：当前执行的函数。匿名函数指代自身：递归factorial
	arguments.caller()：调用当前函数的函数（栈）This feature is obsolete. 

默认值
防止undefined或者null（未初始化）：
a = a || "";
ES6的新方法：
function animalSentence(animals2 = "tigers", animals3 = "bears") {
                return `Lions and ${animals2} and ${animals3}! Oh my!`;
            }

将对象作为实参
好处是不用记得顺序，坏处是要记得形参的名字
闭包Closure
闭包是什么？继承？原型？
Lexical scoping 词法作用域
函数定义时就决定了变量作用域，而不是在函数调用时。
参数和局部变量，嵌套的，全局变量
var scope = "global scope";//全局变量
function checkscope() {
    var scope = "local scope";//局部变量
    function f() { return scope; }//在作用域中返回这个值
    return f;
}
checkscope()()//返回值是什么?

常常出现的错误在于，for循环中保存通过var声明的counter值，因为共享的是同一个counter，所以保存的是循环的最后一个值。
而使用块级作用域声明let或者使用闭包可以保存每一个counter值：
function constfunc(v) {return function () {return v; } }
这里有两个function，两个return ，ES 6 中的let尝试的块级作用域用具解决闭包的繁琐：。

变量作用域
作用域链《JavaScript权威指南》3.10.2
JAVASCRIPT是基于词法作用域的语言：通过阅读包含变量定义在内的数行源码就能知道变量的作用域。全局变量在程序中始终都是有定义的。局部变量在声明它的函数体内以及其所嵌套的函数内始终是有定义的。 
如果将一个局部变量看做是自定义实现的对象的属性的话，那么可以换个角度来解读变量作用域。每一段JAVASCRIPT代码（全局代码或函数）都有一个与之关联的作用域链（SCOPE CHAIN）。这个作用域链是一个对象列表或者链表，这组对象定义了这段代码“作用域中”的变量。当JAVASCRIPT需要查找变量X的值的时候（这个过程称做“变量解析”（VARIABLE RESOLUTION）），它会从链中的第一个对象开始查找，如果这个对象有一个名为X的属性，则会直接使用这个属性的值，如果第一个对象中不存在名为X的属性，JAVASCRIPT会继续查找链上的下一个对象。如果第二个对象依然没有名为X的属性，则会继续查找下一个对象，以此类推。如果作用域链上没有任何一个对象含有属性X，那么就认为这段代码的作用域链上不存在X，并最终抛出一个引用错误（REFERENCEERROR）异常。 
在JAVASCRIPT的最顶层代码中（也就是不包含在任何函数定义内的代码），作用域链由一个全局对象组成。在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象。在一个嵌套的函数体内，作用域链上至少有三个对象。理解对象链的创建规则是非常重要的。当定义一个函数时，它实际上保存一个作用域链。当调用这个函数时，它创建一个新的对象来存储它的局部变量，并将这个对象添加至保存的那个作用域链上，同时创建一个新的更长的表示函数调用作用域的“链”。对于嵌套函数来讲，事情变得更加有趣，每次调用外部函数时，内部函数又会重新定义一遍。因为每次调用外部函数的时候，作用域链都是不同的。内部函数在每次定义的时候都有微妙的差别——在每次调用外部函数时，内部函数的代码都是相同的，而且关联这段代码的作用域链也不相同。 

泛函数
可调用对象
函数都可以被调用，但是被调用的不都是函数，也有可能是可调用对象。例如客户端方法：
Window.alert() 和 Document.getElementById();是为可调用的宿主对象。
Function()构造函数
注意new Function(arg[,arg[,…]],body)构造函数的函数体代码的编译总是会在顶层函数执行，也就是全局作用域。
call() 、apply() 和bind() 
call和apply是用来动态改变this。（函数运行时的context，也就是上下文即this的指向）而bind()是利用apply/call来返回一个函数，用来永久实现以上功能。（apply/call的使用是一次性的）

if (!Function.prototype.bind) {
    Function.prototype.bind = function (obj,/*,args*/) {
        var self = this, boundArgs = arguments;
        return function () {
            var args = [], i;
            for (i = 1; i < boundArgs.length; i++)args.push(boundArgs[i]);
            for (i = 0; i < arguments.length; i++)args.push(arguments[i]);
            return self.apply(o, args);
        }
    }
}

this.x = 9;
var module = {
    x: 81,
    getX: function () { return this.x; }
};

module.getX(); // 返回 81

var retrieveX = module.getX;
retrieveX(); // 返回 9, 在这种情况下，"this"指向全局作用域
// 创建一个新函数，将"this"绑定到module对象
// 新手可能会被全局的x变量和module里的属性x所迷惑
var boundGetX = retrieveX.bind({ x: 33 });
p(boundGetX()); // 返回 33

function p(argument) {
    console.log(argument);
}

strict模式中 call() 和 apply()的第一个值是this，其他的情况null和undefined是全局对象，或者包装对象（wrapper object）。
	
创建绑定函数
bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，希望方法中的 this 是原来的对象。（比如在回调中传入这个方法。）如果不做特殊处理的话，一般会丢失原来的对象。从原来的函数和原来的对象创建一个绑定函数，则能很漂亮地解决这个问题：
Promise的实现
1.	Promise是什么？有什么作用？适用于哪些场景？如何使用？原理是什么？
Web浏览器中的JavaScript
同一个页面的JavaScript代码引用同一个windows对象，所以是共享的。
JavaScript的执行顺序分为两个阶段：
1.	载入文档内容
2.	事件驱动的异步

可能涉及到浏览器的渲染过程：深入理解浏览器渲染原理。
HTML解析器遇到<script>时就会先解析script.<script>有两个属性 defer 和async
相同点：
	加载文件时不阻塞页面渲染
	对于inline的script无效
	使用这两个属性的脚本中不能调用document.write方法
	有脚本的onload的事件回调

区别点：
	html的版本html4.0中定义了defer；html5.0中定义了async
	执行时刻：
每一个async属性的脚本都在它下载结束之后立刻执行，同时会在window的load事件之前执行。所以就有可能出现脚本执行顺序被打乱的情况；
每一个defer属性的脚本都是在页面解析完毕之后，按照原本的顺序执行，同时会在document的DOMContentLoaded之前执行。

```
/**
 * 异步加载脚本
 * @param {String} url 
 */
function loadasyni(url){
    var head = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.src = url;
    head.appendChild(s);//将script元素插入head标签中
}
```
BookmarkLet 有空可以来研究一下
跨域的问题
CORS跨域资源共享
Window
Location和Navigation
window对象和document的location对象引用的都是Location对象
document.URL是文档首次载入后保存的静态字符串不会随着hash变短改变；而Location会改变。=》URL是一个字符串，而location是一个对象，包含其他的属性。例如：
location.toString()===location.href //=>true
按照普通的资源定位符protocol/host/hostname/port/pathname/search/hash
URLSearchParams():未成标准的URLArguments获取函数
DOM
整体的思路：
1.	选择
a)	选择方式
i.	几个get和querySelectorAll()、querySelector();
ii.	ParentNode\childNodes\firstChild\lastChild\nextSibling\previousSibling
iii.	上
iv.	中
v.	下
2.	改变
a)	Create
b)	Update
c)	Delete
理解树形结构
Node对象
NodeType
var type = node.nodeType;
对应的数字编号
1.	Element
2.	Attribute
3.	Text
属性
有些特殊的，比如在JavaScript中是保留字for——htmlFor；class——className
jQuery
Events
.on()
jQuery()..on( events [, selector ] [, data ], handler )
事件命名空间
An event name can be qualified by event namespaces that simplify removing or triggering the event. 
    .on("click.simple");
    .off("click.simple");

委托代理的原理是：事件注册在jQuery()对象上，当触发事件时，再通过selector处理。
涉及享元模式：只注册到一个对象上，提高了效率和页面性能，解决的动态添加元素导致不能触发的bug。

正则表达式
正则表达式
NodeJS
I/O 的同步与异步
结合Promise

Network
状态码
403：客户端没有访问权限
404：客户端请求出现错误，请求的资源是不存在的
304：重定向，资源在某处有缓存，可以直接取用，不需要向原始地址发起请求。
500：服务器问题

数据结构
JavaScript数组
Unshift=》	《=Push
《=Shift	Pop=》
后进先出Stack

Git
Git工作流是很重要的多人协作方式。主要是应用场景。
MicroSite
OOP
MixIn混入 多重继承
使用组合的形式更加灵活，解耦。类似图书馆的分类方式，如果用标签来查找更容易。

Design Patterns设计模式
《JavaScript设计模式与开发实践》
享元模式
享元模式用于减少应用程序所需要的对象数量。jQuery中的on()委托就是这个模式。
一个对象，会变化的属性和不会变化的属性分开。享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。享元模式的目标是尽量减少共享对象的数量，关于如何划分内部状态和外部状态，下面的几条经验提供了一些指引。
尽量少创建对象，如果只是改动少量的属性就能够完成。例如地图上的ToolTip，在搜索的时候只需要改动坐标和显示信息。
对象池和时间委托。
MVC分型
结构的设计方式
职责单一
高内聚低耦合
Shell作为唯一的入口。
调用其他模块的接口。
NodeJS作为后端服务的性能比较
并不是跟比Java或者C++比性能。主要的优势是“异步”：后端的主要资源不是耗费在Node上而是类似数据库操作之类的，Node负责接收和返回数据。
MicroSite是什么？
	是我的个人小站。准备做一些可以当作时间胶囊的东西。同时也算是可以记录自己这一些成长的过程吧。
整体的结构
zh-cmn-Hans

前端的路由
	uriAnchor HomePage
用来操作锚，作为页面状态的。同时还有缓存技术就是指indexDB，是Brower端的数据库。可以做类似Photoshop历史记录的功能。（暂时还没有实现redo和undo）。
	HTML5 history属性（待研究）
使用HTT¬P和HTTPS的区别
AMD和CMD的优劣或者各自的适用场景
HTML中value innerText innerHTML的区别
	innerHTML：
浏览器会将inneHTML后面的内容作为html来解析。
	innerText
浏览器会将innerText后面的内容作为纯文本来解析。
	value
value是元素的属性值，而innerText和innerHTML是元素开始和结束标签之间的值
Fetch API
使用 Fetch: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
函数节流和函数去抖Debouncer

使用原生方法实现拖拽

