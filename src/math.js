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

export default math
