import baseConverter from '../src/baseConverter'

test('baseConverter(10, 2) === "1010"', () => {
  expect(baseConverter(10, 2)).toBe('1010')
})

test('baseConverter(100345, 16) === "187F9"', () => {
  expect(baseConverter(100345, 16)).toBe('187F9')
})
