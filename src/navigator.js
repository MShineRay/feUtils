/**
 * 根据navigator.userAgent检测浏览器名称
 * @returns {{ name, version}}
 */
export function getBrowserInfo(ua) {
  ua = (ua || navigator.userAgent).toLowerCase();
  let browserInfo = {};

  if(/msie/.test(ua)){
    browserInfo.name="IE"
    browserInfo.version = ua.split('msie ')[1].split(';')[0]
  }else if(ua.indexOf('chrome') > -1 && ua.indexOf('safari') > -1){
    browserInfo.name="Chrome"
    browserInfo.version = ua.split('chrome/')[1].split(' ')[0]
  }else if(ua.indexOf('firefox') > -1){
    browserInfo.name="Firefox"
    browserInfo.version = ua.split('firefox/')[1]
  }else if(ua.indexOf('opera') > -1){
    browserInfo.name="Opera"
    browserInfo.version = ua.split('version/')[1]
  }else if(ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1){
    browserInfo.name="Safari"
    browserInfo.version = ua.split('version/')[1].split(' ')[0]
  }else if(ua.indexOf('edge') > -1){
    browserInfo.name="Edge"
    browserInfo.version = 'TODO'
  }else if(/360se/.test(ua)){
    browserInfo.name="360"
    browserInfo.version = 'TODO'
  }else if(/qqbrowser/.test(ua)){
    browserInfo.name="QQBrowser"
    browserInfo.version = ua.split('Version/')[1].split(' ')[0]
  }else if(/MicroMessenger/i.test(ua)){
    browserInfo.name="WeiXinBrowser"
    browserInfo.version = ua.split('Version/')[1].split(' ')[0]
  }
  return browserInfo;
}

/**
 * 根据navigator.userAgent检测IE浏览器版本号
 * @returns {string}
 */
export function getIEVersion(ua) {
 ua =(ua || navigator.userAgent).toLowerCase();
  const re = new RegExp("msie ([0-9]+)");
  const re11 = new RegExp("rv\:([0-9]+)");
  let ver = '';
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
export function getBrowserLanguage() {
  let currentLang = navigator.language;
  if (!currentLang) {
    currentLang = navigator.browserLanguage;
  }
  return currentLang;
}

/**
 * 根据UA获取操作系统(os)信息
 * @param ua
 * @returns {{ name,version,deviceName }}
 */
export function getOSInfo(ua){
  ua = ua || navigator.userAgent
  let osInfo = {}
  if(/iPhone/.test(ua)){
    osInfo.name='iPhone'
    osInfo.version = ua.split('iPhone OS ')[1].split(' ')[0]
  }else if(/iPad/.test(ua)){
    osInfo.name='iPad'
    osInfo.version = ua.split('iPad; CPU OS ')[1].split(' ')[0]
  }else if(/Android/.test(ua)){
    osInfo.name='Android'
    osInfo.version = ua.split('Android ')[1].split(';')[0]
    osInfo.deviceName = ua.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0]
  }else if(/Windows/.test(ua)){
    osInfo.name='Windows'
    osInfo.version = ua.split('Windows NT ')[1].split(';')[0]
  }else if(/Macintosh/.test(ua)){
    osInfo.name='Mac'
    osInfo.version = ua.split('Mac OS X ')[1].split(')')[0].split(';')[0]
  }
  return osInfo
}

/**
 * 解析UA
 * @param ua
 * @returns {{ osName,osVersion,deviceName,browserName,browserVersion }}
 */
export function getUAInfo(ua){
  ua = ua || navigator.userAgent
  let os = getOSInfo(ua)
  let browser = getBrowserInfo(ua)
  return {
    osName: os.name,
    osVersion: os.version,
    deviceName: os.deviceName,
    browserName: browser.name,
    browserVersion: browser.version,
  }
}


