## Selector
### 层级
- ancestor descendant 后代
- parent > child 子
- prev + next 挨着
- prev ~ siblings 不管挨不挨着


## Events
- [jquery-mobile-document-ready-vs-page-events](https://stackoverflow.com/questions/14468659/jquery-mobile-document-ready-vs-page-events)
```JavaScript
$(document).on('pagebeforecreate',function(){console.log('pagebeforecreate');});
$(document).on('pagecreate',function(){console.log('pagecreate');});
$(document).on('pageinit',function(){console.log('pageinit');});
$(document).on('pagebeforehide',function(){console.log('pagebeforehide');});
$(document).on('pagebeforeshow',function(){console.log('pagebeforeshow');});
$(document).on('pageremove',function(){console.log('pageremove');});
$(document).on('pageshow',function(){console.log('pageshow');});
$(document).on('pagehide',function(){console.log('pagehide');});
$(window).load(function () {console.log("window loaded");});
$(window).unload(function () {console.log("window unloaded");});
$(function () {console.log('document ready');});
```

## Data
[$._data(element, "events")](https://github.com/IanLunn/Sequence/issues/118)

[jQuery源码分析之深入理解jQuery.data,jQuery._data以及data实例函数十八问](http://blog.csdn.net/liangklfang/article/details/48781809)

## $.proxy
[proxy与bind一样吗？](http://huang-x-h.github.io/2016/11/21/jquery-proxy/)
还是命名空间好使
```html
        <button type="button" class="js-click">Click me</button>
        <button type="button" class="js-remove">Remove</button>
        <script>
            var context1 = { say: 'I am Lilei' };
            var context2 = { say: 'I am Hanmeimei' };
            function foo() {
                console.log(this.say);
            }

            var foo1 = $.proxy(foo, context1);
            var foo2 = $.proxy(foo, context2);

            $('.js-click').on('click.foo1', foo1).on('click.foo2', foo2);

            $('.js-remove').on('click', function (e) {
                $('.js-click').off('click.foo1')
            })
        </script>
```
[off](http://devdocs.io/jquery/off)