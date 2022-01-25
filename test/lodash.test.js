// import math from '../src/math.js';
import {add, multiply} from 'lodash'
// lodash 数学计算方法有精度误差

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

// 155.70*100
test('155.70 * 100 to equal 15570', () => {
  expect(multiply(155.70, 100)).toBe(15570)
  // Expected: 15570
  // Received: 15569.999999999998
})
