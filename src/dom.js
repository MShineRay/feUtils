/**
 * 添加事件监听
 * @param dom
 * @param eventName
 * @param callback
 * @param useCapture
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
 */
export function addEventListener(dom, eventName, callback, useCapture) {
  dom.addEventListener ? dom.addEventListener(eventName, callback, !!useCapture) : dom.attachEvent && dom.attachEvent("on" + eventName, callback);
}

/**
 * 移除事件监听
 * @param dom
 * @param eventName
 * @param callback
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener
 */
export function removeEventListener(dom, eventName, callback) {
  dom.removeEventListener ? dom.removeEventListener(eventName, callback, false) : dom.detachEvent && dom.detachEvent("on" + eventName, callback);
}

/**
 * 尽可能快的执行
 * @param fn
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout
 */
export function timeOut0(fn) {
  window.setTimeout(fn, 0);
}

/**
 * 图片上报
 * @param src
 * @param successCb 成功回调
 * @param errorCb  失败回调
 * @returns {HTMLImageElement}
 */
export function imagePing(src, successCb, errorCb) {
  var d = new Image(1, 1);
  d.onload = function() {
    d.onload = null;
    successCb && successCb();
  };
  d.onerror =
    function() {
      d.onerror = null;
      errorCb && errorCb();
    };
  d.src = src;
  return d;
}
