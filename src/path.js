/**
 * 地址栏、url解析工具类
 * @param path
 * @returns {Object}
 */
export function getParam(path) {
  let url = path || location.search;
  let theRequest = new Object();
  if (url.indexOf("?") !== -1) {
    // let str = decodeURIComponent(url.substr(1));
    let str = url.substr(1);
    let strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      // theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
