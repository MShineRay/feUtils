// const enMonthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const chList = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const enWeekList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export function parseDate(date, format = 'YYYY MM DD') {
  date = new Date(parseInt(date))
  const dateObj = {
    YYYY: date.getFullYear(),
    yyyy: date.getFullYear(),
    // YY: date.getFullYear().toString().slice(2),
    chMM: chList[date.getMonth()] + '月',
    numM: numList[date.getMonth()],
    MM: date.getMonth() + 1,
    // M: enMonthList[date.getMonth()].slice(0, 3),
    DD: date.getDate(),
    dd: date.getDate(),
    hh: date.getHours(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
    chWe: date.getDay() + 1 < 7 ? '星期' + chList[date.getDay() + 1] : '星期日',
    We: enWeekList[date.getDay()],
    // W: enWeekList[date.getDay()].slice(0, 2),
    TT: date.getHours() >= 12 ? 'PM' : 'AM'
  }
  for (var k in dateObj) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (dateObj[k] || dateObj[k] === 0) && dateObj[k] < 10 ? '0' + dateObj[k] : dateObj[k])
    }
  }
  return format
}

// 将日期选择器的年月日 转换为 当天的23:59:59
// 此方法为使用日期选择器 而非 日期时间选择器
// date type Date 入参 时间格式
// export function formatDateToDateTime (date) {
//   let tmp = new Date(date).getTime() + 86399000
//   return new Date(tmp)
// }

// 与时区无关 仅仅格式化 y-m-d H:M:s
export function formatDateTime(inputTime) {
  var date = new Date(inputTime)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

/**
 *
 * @param timestamp
 * @param format
 * @returns {string}
 */
export function zeroToLocal(timestamp, format) {
  if (!timestamp) {
    return
  }
  const timeZone = -new Date().getTimezoneOffset() / 60
  const createTime = new Date(timestamp).getTime() + timeZone * 60 * 60 * 1000
  return parseDate(createTime, format)
}

// 转换为零时区时间   国际标准时间=世界时=格林尼治时间=0时区区时=0度经线地方时
export function getZeroDate(date) {
  if (!date) {
    return
  }
  const tmp = new Date(date)
  const timeZone = -new Date().getTimezoneOffset() / 60
  const res = tmp - timeZone * 60 * 60 * 1000
  return new Date(res)
}

// 兼容safari的低版本
export function getUsefulDate(date) {
  // 后端返回 时间格式为 yyyy-MM-dd'T'HH:mm:ss.SSS
  // 这部分处理也是针对这个格式 如果是别的形式 请谨慎使用这个方法
  let tmp = date.split('.')
  if (tmp.length >= 2) {
    tmp = tmp[0]
  } else {
    // 基本上可以说明 date没有好毫秒
    tmp = date
  }
  let res
  // 判断是否有T
  if (tmp.indexOf('T') > -1) {
    res = tmp.replace(/T/g, ' ')
  } else {
    res = tmp
  }
  // 判断是否有’-‘
  if (tmp.indexOf('-') > -1) {
    res = res.replace(/-/g, '/')
  }
  return res
}
