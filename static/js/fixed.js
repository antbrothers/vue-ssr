
function getQueryString(key){
  var queryStr = window.location.search.substr(1);
  var queryArr = queryStr.split('&');
  for (var k in queryArr) {
    var queryBunch = queryArr[k];
    if (queryBunch.indexOf(key + '=') == 0) {
      return queryBunch.split('=')[1];
    }
  }
}
var debug = getQueryString("debug")

if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
  document.write("<script src='https://res.wx.qq.com/open/js/jweixin-1.0.0.js'><\/script>");
  document.write("<script src='./static/js/wxshare.js?v=1'><\/script>");
}
function alert(msg){
  mui.alert(msg);
}

var _czc = _czc || [];
_czc.push(["_setAccount", "1260452286"]);
function alert(txt){
  mui.alert(txt)
}
setTimeout(function(){
  var _twitdh=$("#tx").width()
  var _fontSize=Number(document.querySelector("html").style.fontSize.replace("px", ""));
  if((_twitdh/10)!=_fontSize){
    document.querySelector("html").style.fontSize=_fontSize*10/_twitdh*_fontSize+"px";
 }
}, 300);
