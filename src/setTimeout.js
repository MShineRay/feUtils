/**
 * 时间补偿实现更精准的setTimeout
 *
 * setTimeout 是不准的。因为 setTimeout 是一个宏任务，它的指定时间指的是：进入主线程的时间。
 * 所以什么时候可以执行 callback，需要看 主线程前面还有多少任务待执行。
 * @param callback
 * @param delay
 */
export function accurateSetTimeout(callback, delay) {
  let start = Date.now();
  let elapsed = 0;

  function loop() {
    elapsed = Date.now() - start;

    if (elapsed >= delay) {
      callback();
    } else {
      const compensation = delay - elapsed;
      setTimeout(loop, compensation);
    }
  }

  setTimeout(loop, delay);
}

/**
 * 等待
 * @param delay
 * @returns {Promise<unknown>}
 */
export function wait(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}

/**
 * 尽可能快的执行
 * @param fn
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout
 */
export function timeOut0(fn) {
  window.setTimeout(fn, 0);
}

