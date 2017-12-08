
$(function () {
    let remoteHost4socket,
        axiosOption = {
            method: 'get',
            url: "https://p82pkf9h.api.lncld.net/1.1/classes/json/5a2aabb0a22b9d00625d9e2b",
            headers: {
                "X-LC-Id": "p82PkF9h8rjUrNEwyioydpp4-gzGzoHsz",
                "X-LC-Key": "y24Ms9w7tq0zswLMdehwK2km",
                "Content-Type": "application/json"
            }
        };
    axios(axiosOption)
        .then(function (response) {
            if (200 === response.status) {
                remoteHost4socket = response.data.data_contents[0];
                init(remoteHost4socket);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
})

function init(remoteHost4socket) {
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
            console.log(myName);
            AppSocket.emit('login', { username: myName });
        } else {
            alert('请输入昵称');
            AppSocket.emit('news', { username: "请输入昵称" });
        }
    })

    /*登录成功*/
    AppSocket.on('loginSuccess', function (data) {
        console.log("loginSuccess");
        if (data.username === myName) {
            checkin(data);
        } else {
            alert('用户名不匹配，请重试');
        }
    })

    /*登录失败*/
    AppSocket.on('loginFail', function () {
        console.log("loginFail");
        alert('昵称重复');
    })
    /*新人加入提示*/
    AppSocket.on('add', function (data) {
        console.log("新人加入提示");
        var html = '<p>系统消息:' + data.username + '已加入群聊</p>';
        $('.chat-con').append(html);
    })

    /*退出群聊提示*/
    AppSocket.on('leave', function (name) {
        console.log("退出群聊提示");
        if (name != null) {
            var html = '<p>FBI warning:' + name + '已退出群聊</p>';
            $('.chat-con').append(html);
        }
    })

    /*隐藏登录界面 显示聊天界面*/
    function checkin(data) {
        $('.login-wrap').hide('slow');
        $('.chat-wrap').show('slow');
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
    AppSocket.on('receiveMessage', function (data) {
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
        var html;
        if (data.username === myName) {
            html = '<div class="chat-item item-right clearfix"><span class="img fr"></span><span class="message fr">' + data.message + '</span></div>'
        } else {
            html =
                '<div class="chat-item item-left clearfix rela"><span class="abs myName">' +
                data.username +
                '</span>' +
                '<span class="img fl"></span>' +
                '<span class="fl message">' +
                data.message +
                '</span>' +
                '</div>';
        }
        $('.chat-con').append(html);
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