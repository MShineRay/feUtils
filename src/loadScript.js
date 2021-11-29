/**
 *  js 动态插入脚本
 * @param url
 * @param callback
 */
export function loadScript(url, callback) {
  callback = typeof callback === 'function' ? callback : function() {};
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = function() {
    if(this.readyState === "loaded" || this.readyState === "complete"){
      callback();
    }
  }
  script.onload = callback;
  head.appendChild(script);
}
