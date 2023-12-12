// var dayjs = require('dayjs')
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone  from 'dayjs/plugin/timezone.js'
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * 将当前时区日期转成对应时区的日期
 * 默认转成东八区
 * @param dateStr
 * @param zone
 * @param format
 * @returns {string}
 */
export function localeToZoneDate(dateStr, zone='Asia/Shanghai', format='YYYY-MM-DD HH:mm:ss'){
  return dayjs(dateStr).tz(zone).format(format)
}

let bjTime = '2023-03-22 13:01:00'
let nyTime = '2023-03-22 01:01:00'

console.log(localeToZoneDate(nyTime)===bjTime)
// let d1 = '2023-03-22 15:32:00' // 东八区
// dayjs.tz.setDefault('America/New_York')
console.log(dayjs.tz.guess())
// console.log(dayjs().tz.format())
// Asia/Shanghai
// 2023-03-22T16:09:49+08:00

// America/New_York
// 2023-03-22T16:10:27+08:00

// America/New_York
// 2023-03-22 04:17:00


// console.log('将日期转成东八区：',localeToZoneDate(d1)===d1)
// console.log('将日期转成东八区：',localeToZoneDate(d1, 'America/New_York')=== '2023-03-22 03:32:00')

/**
 * 将 东八区时间，转成 当前时区时间
 * @param dateStr 东八区时间
 * @param targetZone 目标时区
 * @param format
 * @returns {*}
 */
export function zoneDateToLocale(dateStr, targetZone='', format='YYYY-MM-DD HH:mm:ss'){
  const currentZone = targetZone || dayjs.tz.guess()
  return dayjs.tz(dateStr,'Asia/Shanghai').tz(currentZone).format(format)
}


console.log(zoneDateToLocale(bjTime)===nyTime)
