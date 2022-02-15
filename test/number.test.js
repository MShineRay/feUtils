import { mathToFixed } from '../src/math'

Number.prototype.toFixed = function (d) {
  let s = this + ''
  if (!d) d = 0
  if (s.indexOf('.') === -1) s += '.'
  s += new Array(d + 1).join('0')
  if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(s)) {
    let s = '0' + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true
    if (a === d + 2) {
      a = s.match(/\d/g)
      if (parseInt(a[a.length - 1]) > 4) {
        for (let i = a.length - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1
          if (a[i] === 10) {
            a[i] = 0
            b = i !== 1
          } else break
        }
      }
      s = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2')
    } if (b) s = s.substr(1)
    return (pm + s).replace(/\.$/, '')
  }
  return this + ''
}

function getRandomArbitrary(min, max) {
  let res = Math.random() * (max - min) + min
  return res
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  let res = Math.floor(Math.random() * (max - min)) + min
  return res //不含最大值，含最小值
}
test('toFixed', () => {
  let count = 0
  while (count < 3){ // 测试时，可以调大，etc. 1000000
    count++
    let fixNum = getRandomInt(0, 10)
    let testNum = getRandomArbitrary(-9999999999.99999999,9999999999.99999999)
    expect(testNum.toFixed(fixNum)).toBe(
      mathToFixed(testNum, fixNum)
    )
  }

  expect((1.115).toFixed(2)).toBe(
    mathToFixed(1.115, 2)
  )

})
