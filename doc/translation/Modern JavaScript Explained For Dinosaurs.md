# Modern JavaScript Explained For Dinosaurs
>原文：[Modern JavaScript Explained For Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
>![Images from Dinosaur Comics by Ryan North](https://cdn-images-1.medium.com/max/1000/1*H8PH-HaV43gZyBJz0mJHxA.png)
Images from Dinosaur Comics by Ryan North

学习node、npm、grunt、gulp、webpack、babel......等等一些列工具会让人觉得很艰难，如同原始人从原始社会直接跳到了现代社会，见到了高楼大厦拔地而起一样，大写的懵逼。 原因大概是生态环境变化太快，让萌新不能一下就深刻理解这些不同的工具对应的、要解决的问题是什么。（因为没有遇到过，而解决方案是被封装好的，只知道用工具。）
这篇文章就是要理清楚这些脉络，让萌新知道**Why** and **How**这些工具是怎么一步步进化（evolved）的。


## Using JavaScript the “old-school” way
让我们穿梭时空回到过去，用复古风格，走起。

在`index.html`中引用JavaScript文件：
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <!--first-->
  <script src="moment.min.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```
`<script src="index.js"></script>`引入了同目录下名为`index.js`的JS文件,内容为：
```js
// index.js
console.log("Hello from JavaScript!");
```
如果要引用如`moment.js`的第三方库，需要去[官方网站](http://momentjs.com/)下载`moment.min.js`(不要忘记现在穿越了，`npm`这种东西是不存在的，所以忽略右边的`install`吧)
![momentjs](https://cdn-images-1.medium.com/max/1000/1*ef7OX37jr--Jc38ZxO97Iw.png)
然后**手动**将它放在index.js同目录下，并且在index.html中引用：
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
  <link rel="stylesheet" href="index.css">
  <!--second-->
  <script src="moment.min.js"></script>
  <!--first-->
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```
而且重点是，要记住引用顺序，`moment.min.js`在`index.js`之前，这样在`index.js`中引用`moment()`才不会报没有定义的错，如下：
```js
// index.js
console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
```
要用第三方库就要先引入，很好理解对吧。不过好气啊，每当要更新第三方库版本的时候就又要去各自的官方网站点点点点点点，剪切然后粘贴，烦。能不能简单点？能，进化。

## Using a JavaScript package manager (npm)
（包管理器的概念主要来自BackEnd，但是作为一个有着卓越软件工程师梦想的年轻人，不会命令行说不过去啊朋友，还不赶快[来两发](https://www.learnenough.com/command-line-tutorial))

JavaScript包管理器，负责自动从中央仓库下载和更新。npm、yarn、bower的混战,略去不讲。

npm根据package.json里的描述来完成包的管理。
这个过程是通过`npm init`回答几个问题，最终得到`package.json`

```json
 {
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
再运行`$ npm install moment --save`，代表着将moment下载到`./node_modules`文件夹的同时将这个记录插入到`package.json`的`"dependencies"`
```json
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.19.1"
  }
}
```
与他人协作的时候只需要共享这一份描述文件，依赖的包会从中央仓库下载。接下来还需要更改`index.html`当中的引用
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <script src="node_modules/moment/min/moment.min.js"></script>
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```
这样更新就只需要动package.json里的版本号，是不是很棒(๑•̀ㅂ•́)و✧？但是一旦增加引用或者删除引用还要去html文件里修改，仍然很麻烦，能不能再自动化把这点也处理了，省点力？能，进化。
![](https://cdn-images-1.medium.com/max/1000/1*GeEETvRqyG4o7SZdbU2Guw.png)

## Using a JavaScript module bundler (webpack)
使用模块打包器
JavaScript最开始就没打算搞大新闻,所以也就真的没有设计一般程序设计语言的导包的特性。一般引入js文件就算导包了，全局变量就可以随便调用内里的变量，函数了。






