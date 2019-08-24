import $ from 'jquery';
import resolvePath from "./resolvePath";

export default function (JSArray) {
    var componentsPromiseArray = JSArray.map(function (jsObjArray) {
        var jsId = jsObjArray[0];
        var jsPath = resolvePath(jsObjArray[1]);
        window.JSList = window.JSList || {};
        return new Promise(function (resolve, reject) {
            if (window.JSList[jsId]) {
                /* 已被添加，不需要重复添加 */
                resolve(window.JSList[jsId]);
            } else {
                if (!jsPath) {
                    return alert('未设置 ' + jsId + ' loadJS jsPath');
                }
                var scriptID = 'script-' + jsId;
                var $script = $('#' + scriptID);
                if ($script.length === 0) {
                    var scriptEle = document.createElement('script');
                    scriptEle.id = scriptID;
                    scriptEle.src = jsPath;
                    scriptEle.defer = true;

                    scriptEle.onload = function (event) {
                        scriptEle.onload = scriptEle.onerror = null;
                        resolve(event);
                    };

                    scriptEle.onerror = function (event) {
                        console.warn(event.type);
                        console.log(scriptEle.src);
                        scriptEle.onload = scriptEle.onerror = null;
                        reject(event);
                    };

                    var $scriptGroup = $('#script-group');
                    if ($scriptGroup.length === 0) {
                        $scriptGroup = $('<div></div>')
                            .attr('id', 'script-group')
                            .appendTo($('body'));
                    }
                    $scriptGroup[0].appendChild(scriptEle);
                }
            }
        });
    });
    return Promise.all(componentsPromiseArray);
}