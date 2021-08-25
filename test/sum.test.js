
import sum from '../src/sum.js';
console.log(sum(1, 2))
/**
 * 求和
 * @param path
 * @returns {Object}
 */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
