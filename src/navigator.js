/**
 * 根据navigator.userAgent检测浏览器名称
 * @returns {string}
 */
export function getBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  var browser = '';
  var browserObj = {
    IE: window.ActiveXObject || "ActiveXObject" in window, // IE
    Chrome: ua.indexOf('chrome') > -1 && ua.indexOf('safari') > -1, // Chrome浏览器 etc. 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
    Firefox: ua.indexOf('firefox') > -1, // 火狐浏览器 etc. "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:95.0) Gecko/20100101 Firefox/95.0"
    Opera: ua.indexOf('opera') > -1, // Opera浏览器
    Safari: ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1, // safari浏览器 etc. "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15"
    Edge: ua.indexOf('edge') > -1, // Edge浏览器
    QQBrowser: /qqbrowser/.test(ua), // qq浏览器
    WeixinBrowser: /MicroMessenger/i.test(ua) // 微信浏览器
  };
  for (var i in browserObj) {
    if (browserObj[i]) {
      browser = i;
    }
  }
  return browser;
}

/**
 * 根据navigator.userAgent检测IE浏览器版本号
 * @returns {string}
 */
export function getIEVersion() {
  var ua = navigator.userAgent.toLowerCase();
  var re = new RegExp("msie ([0-9]+)");
  var re11 = new RegExp("rv\:([0-9]+)");
  var ver = '';
  if (re.exec(ua) != null) {
    ver = RegExp.$1;
  } else { // IE11
    if(re11.exec(ua) != null) {
      console.log(RegExp.$1);
      ver = RegExp.$1;
    }
  }
  return ver;
}

/**
 * 获取浏览器语言
 * @returns {string}
 */
function getBrowserLanguage() {
  var currentLang = navigator.language;
  if (!currentLang) {
    currentLang = navigator.browserLanguage;
  }
  return currentLang;
}

