// import math from '../src/math.js';
import {add, multiply} from 'lodash'
// lodash 数学计算方法有精度误差

describe('lodash test', ()=>{
  it('lodash add 1 + 2  to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })

// 155.70*100
  it('lodash multiply 155.70 * 100 not to equal 15570', () => {
    expect(multiply(155.70, 100)).toBeLessThan(15570)
    // Expected: 15570
    // Received: 15569.999999999998
  })
})

