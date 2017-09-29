/*
 * shell.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */
const NODE_TYPE = {
    type_1: "ELEMENT_NODE",
    type_3: "TEXT_NODE",
    type_7: "PROCESSING_INSTRUCTION_NODE",
    type_8: "COMMENT_NODE",
    type_9: "DOCUMENT_NODE",
    type_10: "DOCUMENT_TYPE_NODE",
    type_11: "DOCUMENT_FRAGMENT_NODE",
    getName: function (typeNum) {
        return this["type_" + typeNum];
    }
};

var shell = (function () {
    var initModule = function ($container) {
        shell.navbar.initModule($container);
        // shell.intro.initModule($container);
        // window.onmessage = (() => console.log(arguments));
        // getJsonByQuery();
    };
    return { initModule: initModule };
}());

function getDataFromAPI(callback = null, url = 3, method = "get") {
    // query = escape(encodeURIComponent(query));
    let surl = {
        1: "https://104.168.102.215:3000/ajax/all",
        2: "https://104.168.102.215:3000/queryall",
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
                    if (jsonResObj.rData) { jsonResObj.rData = JSON.parse(jsonResObj.rData) };
                    if (callback) { callback(jsonResObj) };
                } catch (e) {
                    console.log(e);
                }
            }
        }
    });
}

function getJsonByQuery(query, callback) {
    query = escape(encodeURIComponent(query));
    var surl1 = "https://api.github.com/users/ShoneSingLone";
    $.ajax({
        type: "get",
        url: surl1,
        data: {},
        dataType: "text",
        complete: function (XMLHttpRequest, textStatus) {
            var status = { success: true };
            if (status[textStatus]) {
                var jsnData = XMLHttpRequest.responseText;
                try {
                    jsnData = JSON.parse(jsnData);
                    var $img = $(`<img id="avatar_url" class="img-circle" src="" alt="avatar_url" width="40" height="40">`);
                    $img.attr("src", avatar_url);
                    if (callback) {
                        callback(jsnData[0]);
                    }
                } catch (e) {

                }
            }
        }
    });
}