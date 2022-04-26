/**
 * 地址栏、url解析工具类
 * @param path
 * @returns {Object}
 */
export const urlParse = function(path) {
  const url = path || location.search
  const theRequest = {}
  if (url.indexOf('?') !== -1) {
    const str = url.substr(url.indexOf('?') + 1)
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
    }
  }
  return theRequest
}
