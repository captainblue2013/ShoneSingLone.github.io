/*
 * shell.navbar.js
 * require shell.js
 */


shell.navbar = (function ($) {
    //---------------- BEGIN MODULE SCOPE VARIABLES --------------
    var
        configMap = {
            html_nav_top_bar: "" +
            '    <nav id="nav-top-bar" class="navbar navbar-default navbar-fixed-top">' +
            '        <div class="container">' +
            '            <div class="navbar-header">' +
            '                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"' +
            '                    aria-controls="navbar">' +
            '                    <span class="sr-only">Toggle navigation</span>' +
            '                    <span class="icon-bar"></span>' +
            '                    <span class="icon-bar"></span>' +
            '                    <span class="icon-bar"></span>' +
            '                </button>' +
            '                <a class="navbar-brand" href="#">ShoneSingLone\'s MicroSite</a>' +
            '            </div>' +
            '            <div id="navbar" class="navbar-collapse collapse">' +
            '                <ul class="nav navbar-nav"> </ul>' +
            '                <ul class="nav navbar-nav navbar-right">' +
            '                    <li><a href="#home">Home</a></li>' +
            '                    <li><a target="_blank" href="https://github.com/ShoneSingLone">Github</a></li>' +
            '                    <li><a href="mailto:SingLone@foxmail.com">Email me!</a></li>' +
            '                    <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>' +
            '                        <ul class="dropdown-menu">' +
            '                            <li><a href="#">Action</a></li>' +
            '                            <li><a href="#">Another action</a></li>' +
            '                            <li><a href="#">Something else here</a></li>' +
            '                            <li role="separator" class="divider"></li>' +
            '                            <li class="dropdown-header">Nav header</li>' +
            '                            <li><a href="#">Separated link</a></li>' +
            '                            <li><a href="#">One more separated link</a></li>' +
            '                        </ul>' +
            '                    </li>' +
            '                </ul>' +
            '            </div>' +
            '        </div>' +
            '    </nav>',
            html_nav_stamp: "" +
            '    <div id="nav-stamp">' +
            '    </div>'
        },
        stateMap = {
            $container: null,
            anchor_map: {}
        },
        jqueryMap = {},
        dealImag;
    //----------------- END MODULE SCOPE VARIABLES ---------------

    //----------------------------------
    dealImag = function (jsonData) {
        if (jsonData.avatar_url) {

            var $img = $("<img/>", {
                id: "avatar_url",
                class: "img-circle",
                src: jsonData.avatar_url,
                alt: "avatar_url",
                width: 150 + "px",
                height: 150 + "px",
                display: "inline-block",
                "data-animate-url": "https://daneden.github.io/animate.css/"
            });
            $img.attr("src", jsonData.avatar_url).animateCss("bounceInDown");
            $("#book").attr("src", jsonData.avatar_url);
            $("div.navbar-header a.navbar-brand").before($img);
            var switchImg = (function ($img) {
                return function () {
                    if ($img.css("display") === "none") {
                        $img.animateCss("bounceInDown").show();
                    } else {
                        // $img.show().animateCss("bounceInDown");
                        $img.animateCss("bounceOutUp", function () {
                            $img.hide();
                        });
                    }
                };
            })($img);
            $("div.navbar-header").on("click.switchImg", ".navbar-brand", switchImg);
        }
    }

    //----------------------------------

    //-------------------- END EVENT HANDLERS --------------------

    //------------------- BEGIN PUBLIC METHODS -------------------
    // Begin Public method /initModule/
    initModule = function ($container) {
        // load HTML and map jQuery collections
        stateMap.$container = $container;
        var $nav_top_bar = $(configMap.html_nav_top_bar);
        var $nav_stamp = $(configMap.html_nav_stamp);
        $container.append($nav_top_bar)
        var navbarOuterHeight = $nav_top_bar.outerHeight();
        var cssStyle = {
            height: navbarOuterHeight + "px",
            marginBottom: "1em"
        };
        $nav_stamp.css(cssStyle);
        $container.append($nav_stamp);
        shell.getDataFromAPI(dealImag, 3);
    };
    // End PUBLIC method /initModule/
    return {
        initModule: initModule,
        dealImag: dealImag
    };
    //------------------- END PUBLIC METHODS ---------------------
}(jQuery));
