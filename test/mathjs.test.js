import math, { mathMultiply, mathAdd, mathDivide, mathSubtract } from '../src/math.js'

test('mathMultiply(155.70,  100)', () => {
  expect(mathMultiply(155.70,  100)).toBe(15570);
  // Expected: 15570
  // Received: 15569.999999999998
});

test('mathAdd(0.1, 0.2)', () => {
  expect(mathAdd(0.1, 0.2)).toBe(0.3);
  // Expected: 0.3
  // Received: 0.30000000000000004
});

test('mathDivide(0.3, 0.1)', () => {
  expect(mathDivide(0.3, 1)).toBe(0.3);

  // 0.1 / 0.3
  // Expected: 0.3333333333333333
  // Received: 0.30000000000000004
});

test('mathSubtract(0.1, 0.4)', () => {
  expect(mathSubtract(0.1, 0.4)).toBe(-0.3);

  // 0.1-0.4
  // Expected: -0.3
  // Received: -0.30000000000000004
});


