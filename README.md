# ShoneSingLone.github.io

- GitHub ajax get需要HTTPS。
- 手机浏览器对自签证书的限制。
- 添加一下小动画[animate.css](https://daneden.github.io/animate.css/),给jQuery做了扩展：添加了一个回调函数；

```js
// Just-add-water CSS animations
// 
//https://daneden.github.io/animate.css/

jQuery.fn.extend({
	animateCss: function (animationName,callback) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		return this.addClass('animated ' + animationName).one(animationEnd, function () { 
			$(this).removeClass('animated ' + animationName); 
			if(callback){
                //jQuery对象
				callback($(this));
			}
		});
	}
});
```
- 调整nav的水平居中，引申出布局的几个问题：居中。

# drawer
取自bs-nav
modal
dropdown
媒体查询
节流和去抖
字体的加载
jQuery 动画
pointerevent

这里遇到一个小问题：当drawer出现后，晃动鼠标中键会使得屏幕向下滑动，这时需要`overflow: hidden;`使超出的元素不可见。
还要在研习一下Google给的demo，先暂时不修了。（挖坑）
```css
        .drawer-is-show {
			overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
```


```js
    axios({
        method: 'post',
        url: dataBaseUrl,
        headers: {
            "X-LC-Id": "***",
            "X-LC-Key": "***",
            "Content-Type": "application/json"
        },
        data: data4post("remoteHost4socket", "***")
    }).then(function (response) {
        console.dir(response);
    }).catch(function (error) {
        console.dir(error);
	});
	function data4post(dataName, dataContents) {
		return JSON.stringify({
			"data_name": dataName,
			"data_contents": {
				0: dataContents
			}
		});
	}
	axios.get("https://p82pkf9h.api.lncld.net/1.1/classes/json/" + jsonDataId.seller,
        requestOption
    ).then(function (response) {
        if (200 === response.status) {
            thisCompoent.seller = response.data.data_contents[0];
            console.log(thisCompoent.seller);
        }
    }).catch(function (error) {
        console.log(error);
    });

```

登录
服务器
反向代理