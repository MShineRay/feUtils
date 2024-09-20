/**
 * 防抖
 * 关注点：
 *  频繁触发
 *  耗时操作
 *  仅关心最后一次的触发
 * @param fn
 * @param delay
 * @param args
 * @returns {(function(): void)|*}
 */
export function debounce(fn, delay=1000, ...args) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
