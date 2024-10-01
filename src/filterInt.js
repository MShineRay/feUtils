/**
 * 解析整型值
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 * @param value
 * @returns {number}
 */
export function filterInt (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value)
  return NaN
}
