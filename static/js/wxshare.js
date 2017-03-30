function wxShare(opts) {
    var dest_url = window.location.href;
    $.ajax({
        type: "get",
        url: "https://lvbhd.eastmoney.com/api/WX/GetSignature?s=" + encodeURIComponent(dest_url),
        dataType: "jsonp",
        jsonpCallback: 'abc',
        success: function (json) {
            if (json != null) {
                wx.config({
                    debug: opts.debug?opts.debug:false,
                    appId: json.AppId,
                    timestamp: json.Timestamp,
                    nonceStr: json.NonceStr,
                    signature: json.Signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'
                    ]
                });
            }
        }
    });

    var json1 = {
        title: opts.title,
        desc: opts.desc,
        link: opts.link,
        imgUrl: opts.imgUrl,
        trigger: function (res) {
            //alert('用户点击发送给朋友');
        },
        success: function (res) {
            //alert('已分享');
        },
        cancel: function (res) {
            //alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    }

    var json2 = {
        title: opts.title + ' ' + opts.desc,
        link: opts.link,
        imgUrl: opts.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到朋友圈');
        },
        success: function (res) {
            //alert('已分享');
        },
        cancel: function (res) {
            //alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    };

    var json3 = {
        title: opts.title,
        desc: opts.desc,
        link: opts.link,
        imgUrl: opts.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到QQ');
        },
        complete: function (res) {
            //alert(JSON.stringify(res));
        },
        success: function (res) {
            //alert('已分享');
        },
        cancel: function (res) {
            //alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    };

    var json4 = {
        title: opts.title,
        desc: opts.desc,
        link: opts.link,
        imgUrl: opts.imgUrl,
        trigger: function (res) {
            alert('用户点击分享到微博');
        },
        complete: function (res) {
            alert(JSON.stringify(res));
        },
        success: function (res) {
            alert('已分享');
        },
        cancel: function (res) {
            alert('已取消');
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        }
    }


    wx.ready(function () {

        // 2. 分享接口
        // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareAppMessage(json1);
        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareTimeline(json2);
        // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareQQ(json3);
        // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareWeibo(json4);
    });

    wx.error(function (res) {
        alert(res.errMsg);
    });

}
