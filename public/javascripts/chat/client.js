
$(function () {
    remoteHost4socket = "https://shonesinglone.leanapp.cn/";
    // remoteHost4socket = "http://localhost:3000/";
    init(remoteHost4socket);

})

function init(remoteHost4socket) {
    var $listGroup = $('#list-group');

    /*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/
    var AppSocket = io(remoteHost4socket);
    window.AppSocket = AppSocket;
    /*定义用户名*/
    var myName = null;
    $('#loginName').val(moment().format('MMMM Do YYYY, h:mm:ss a'));
    /*登录*/
    $('.login-btn').click(function () {
        myName = $.trim($('#loginName').val());
        if (myName) { /*向服务端发送登录事件*/
            console.log("loginName: " + myName);
            AppSocket.emit('login', { username: myName });
        } else {
            alert('请输入昵称');
            AppSocket.emit('news', { username: "请输入昵称" });
        }
    })

    /*登录成功*/
    makeSocketEvent('loginSuccess', function (data) {
        console.log("loginSuccess");
        if (data.username === myName) {
            checkView(data);
        } else {
            // alert('用户名不匹配，请重试');
            // checkView();
        }
    })

    /*登录失败*/
    makeSocketEvent('loginFail', function () {
        alert('昵称重复');
    })
    /*新人加入提示*/
    makeSocketEvent('add', function (data) {
        $listGroup.append('<div class="alert alert-success" role="alert"><p>系统消息:' + data.username + '已加入群聊</p></div>');
    })

    /*退出群聊提示*/
    makeSocketEvent('leave', function (name) {
        if (name != null) {
            $listGroup.append('<div class="alert alert-warning" role="alert"><p>FBI warning:' + name + '已退出群聊</p></div>');
        }
    })

    function makeSocketEvent(eventName, callBack) {
        AppSocket.on(eventName, function (data) {
            console.log("CLIENT " + eventName + " \n ");
            callBack(data);
        });
    }

    /*隐藏登录界面 显示聊天界面*/
    function checkView(data) {
        if (data) {
            $('.login-wrap').hide('slow');
            $('.chat-wrap').show('slow');
        } else {
            $('.chat-wrap').hide('slow');
            $('.login-wrap').show('slow');
            $listGroup.html('');
        }
    }

    /*发送消息*/
    $('.sendBtn').click(function () {
        sendMessage();
    });

    $(document).on("keydown", function (event) {
        if (event.keyCode == 13) {
            sendMessage();
        }
    })

    /*接收消息*/
    makeSocketEvent('receiveMessage', function (data) {
        showMessage(data);
    })

    function sendMessage() {
        var txt = $('#sendtxt').val();
        console.log(txt);
        $('#sendtxt').val('');
        if (txt) {
            AppSocket.emit('sendMessage', { username: myName, message: txt });
        }
    }
    /*显示消息*/
    function showMessage(data) {
        debugger;
        var html = getListItem(data, myName);
        $listGroup.append(html);
    }

    function getListItem(data, myName) {
        if (data.username === myName) {
            return '<li class="list-group-item">' +
                '    <div class="content-item">' +
                '        <div>' +
                '            <div style="float: right;">' +
                '                <span>' + data.username + '</span>' +
                '                <img src="./public/images/user/avatar.png" alt="" class="chat-avatar">' +
                '            </div>' +
                '            <div style="clear:both; ">' + data.message + '</div>' +
                '        </div>' +
                '    </div>' +
                '</li>';
        } else {
            return '<li class="list-group-item">' +
                '    <div class="content-item">' +
                '        <div>' +
                '            <div style="float: left;">' +
                '                <img src="./public/images/user/avatar.png" alt="" class="chat-avatar">' +
                '                <span>' + data.username + '</span>' +
                '            </div>' +
                '            <div style="clear:both; ">' + data.message + '</div>' +
                '        </div>' +
                '    </div>' +
                '</li>';
        }
    }
}

function data4post(dataName, dataContents) {
    return JSON.stringify({
        "data_name": dataName,
        "data_contents": {
            0: dataContents
        }
    });
}