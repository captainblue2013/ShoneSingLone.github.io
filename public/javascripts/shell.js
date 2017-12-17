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

    let initModule, getDataFromAPI;

    initModule = function ($container) {

        // shell.navbar.initModule($container);
        // shell.container.initModule($container);

        var $body = $("body"),
            // $main = $("main"),
            $btn = $('#toggle-darwer'),
            $drawer = $('#drawer .nav'),
            $drawerBackdrop = $('<div class="drawer-backdrop"></div>');


        var drawerInit, drawerIn, drawerOut, drawerToggle;


        drawerIn = function () {
            $body.addClass("drawer-is-show");
            $drawer.animateCss("fadeInLeft", function () {
                $drawerBackdrop.one("click.drawerOut", drawerOut);
            }).show();
            $drawerBackdrop.appendTo('body');
        };
        drawerOut = function () {
            $drawer.animateCss("fadeOutLeft", drawerInit);
        };
        drawerInit = function () {
            $drawer.hide();
            $drawerBackdrop.remove();
            $body.removeClass("drawer-is-show");
            $btn.one("click.drawerIn", drawerIn);
        };

        $(window).on("resize.toogleDrawer", function (e) {
            $('.currentsize').html("outerHeight: " + window.outerHeight + "\nouterWidth: " +
                window.outerWidth);
            if (!window.matchMedia("(min-width: 768px)").matches) {
                if ($drawer.css("display") === "none") {
                    $btn.off("click.drawerIn").off("click.drawerOut");
                    $btn.one("click.drawerIn", drawerIn);
                } else {
                    $drawerBackdrop.one("click.drawerOut", drawerOut);
                }
            } else {
                if ($drawer.css("display") === "none") {
                    $drawerBackdrop.remove();
                    $drawer.css("display", "block");
                }
            }
        }).trigger("resize.toogleDrawer");




        var $col1 = $("#main-container-row-col1"),
            $col2 = $("#main-container-row-col2"),
            $col3 = $("#main-container-row-col3");
        var colArray = [$col1, $col2, $col3];
        var contentArray = [];
        var randomPanelNum = Math.ceil(Math.random() * 100);
        for (var index = 0; index < randomPanelNum; index++) {
            var htmlString = getContentCardHtmlStr(index + "Blog template")
            // htmlString = getContentCardHtmlStr(htmlString.slice(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100) + 100));
            var $htmlString = $(htmlString);
            console.lo
            var colIndex = index % 3;
            colArray[colIndex].append($htmlString);
        }


        // }, getDataFromAPI = function (callback, url, method) {
        // callback = callback || null, url = url || 3, method = method || "get";
    }, getDataFromAPI = function (url, method) {
        callback = function (jsonData) {
            if (jsonData.avatar_url) {
                var $img = $("<img/>", {
                    id: "avatar_url",
                    class: "img-circle",
                    src: jsonData.avatar_url,
                    alt: "avatar",
                    height: 150 + "px",
                    display: "block",
                    "data-animate-url": "https://daneden.github.io/animate.css/"
                });

                var transTime = 2000;
                $("#myavatar").prepend($img.hide());
                $img.css({
                    "margin": "10px auto"
                }).show(transTime);
                $("#portfolio-title").animate({
                    "font-size": "14px"
                }, transTime);
            }
        }, url = url || 3, method = method || "get";
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
                        if (jsonResObj.rData) { jsonResObj.rData = JSON.parse(jsonResObj.rData) }; //针对自有API
                        if (callback) { callback(jsonResObj) };
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        });
    }, getNodeTypeName = function (typeNum) {
        return NODE_TYPE["type_" + typeNum];
    }, getContentCardHtmlStr = function (headStr, contentsStr) {
        headStr = headStr || "Blog template";
        contentsStr = contentsStr ||
            'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.';
        return '' +
            '                    <div class="panel panel-default">' +
            '                        <div class="panel-heading">' +
            '                            <h2 class="currentsize" class="mdl-card__title-text">' + headStr + '</h2>' +
            '                        </div>' +
            '                        <div class="panel-body">' +
            '                            <div class="mdl-card__supporting-text">' + contentsStr +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="panel-footer"><a class="btn btn-default" href="#" role="button">View details Read more»</a></a>' +
            '                        </div>' +
            '                    </div>';
    };

    // console.log(shell.getNodeTypeName(1));
    return {
        initModule: initModule,
        getNodeTypeName: getNodeTypeName,
        getDataFromAPI: getDataFromAPI
    };
}(jQuery));
