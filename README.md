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
