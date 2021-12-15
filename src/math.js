import math, { bignumber, format, add, subtract, multiply, divide } from 'mathjs'

// +
export function mathAdd(a, b) {
  return format(
    add(bignumber(a), bignumber(b))
  )* 1
}

// -
export function mathSubtract(a, b) {
  return format(
    subtract(bignumber(a), bignumber(b))
  )* 1
}
// *
export function mathMultiply(a, b) {
  return format(
    multiply(bignumber(a), bignumber(b))
  )* 1
}
// /
export function mathDivide(a, b) {
  return format(
    divide(bignumber(a), bignumber(b))
  )* 1
}


// (144094.425).toFixed(2) === "144094.42" toFixed方法有误差
// mathToFixed(144094.425,2) === "144094.43"
export function mathToFixed(value, precision){
  return format(value,  {notation: 'fixed', precision: precision})
}

export default math
