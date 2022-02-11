/**
 * 遮盖字符串
 * @param str 原始值
 * @param beginLen 展示前几位
 * @param endLen 展示后几位
 * @param mask 遮盖符
 * @returns {string}
 */
export function maskStr(str = '', beginLen = 4, endLen = 4, mask = '*') {
  if (str && str.length > (beginLen + endLen)) {
    const begin = str.substring(0, beginLen)
    const end = str.substring(str.length - endLen)
    return begin + mask.repeat(str.length - beginLen - endLen) + end
  } else {
    return str
  }
}
