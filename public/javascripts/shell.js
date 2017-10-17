/*
 * shell.js
 * Root namespace module
 * require jQuery.js
*/

var shell = (function ($) {

    const NODE_TYPE = {
        type_1: "ELEMENT_NODE",
        type_3: "TEXT_NODE",
        type_7: "PROCESSING_INSTRUCTION_NODE",
        type_8: "COMMENT_NODE",
        type_9: "DOCUMENT_NODE",
        type_10: "DOCUMENT_TYPE_NODE",
        type_11: "DOCUMENT_FRAGMENT_NODE"
    };

    let initModule = function ($container) {
        shell.navbar.initModule($container);
        
    }, getDataFromAPI = function (callback = null, url = 3, method = "get") {
        const surl = {
            3: "https://api.github.com/users/ShoneSingLone"
        };
        $.ajax({
            type: method,
            url: surl[url],
            data: {},
            dataType: "text",
            complete: function (XMLHttpRequest, textStatus) {
                let status = { success: true };
                if (status[textStatus] && XMLHttpRequest.responseText) {
                    // console.log(Object.prototype.toString.call(XMLHttpRequest.responseText));//"[object String]"
                    try {
                        let jsonResObj = JSON.parse(XMLHttpRequest.responseText);
                        if (jsonResObj.rData) { jsonResObj.rData = JSON.parse(jsonResObj.rData) };//针对自有API
                        if (callback) { callback(jsonResObj) };
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        });
    }, getNodeTypeName = function (typeNum) {
        return NODE_TYPE["type_" + typeNum];
    };

    // console.log(shell.getNodeTypeName(1));
    return {
        initModule: initModule,
        getNodeTypeName: getNodeTypeName,
        getDataFromAPI: getDataFromAPI
    };
}(jQuery));
