requirejs.config({
    //开发专用，阻止浏览器缓存
    urlArgs: "v=" + Date.now(),
    //js文件的目录，相对于引入main.js的那个文件的目录
    baseUrl: 'public',
    //对于默认不兼容AMD规范的模块通过shim来配置
    //deps数组，表明该模块的依赖性，
    //exports值，表明这个模块外部调用时的名称
    //下面代码里面包含了如何加载库和插件
    shim: {
        'javascripts/shell': {
            deps: ['jquery'],
            exports: 'shell'
        },
        'javascripts/shell.navbar': {
            deps: ['jquery'],
            exports: 'shellNavbar'
        },
        'bootstrap/js/bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'javascripts/jquery.uriAnchor-1.1.3': {
            deps: ['jquery'],
            exports: 'uriAnchor'
        }
    },
    //模块的加载路径（不要加.js后缀，因为默认就是加载js，加了会报错）
    //路径是相对于上面的baseUrl
    paths: {
        jquery: "javascripts/jquery-3.2.1"
    }
});

//下面开始加载执行
require(['shell'], function (shell) {
    shell.getDataFromAPI(3);
    shell.initModule();
});
