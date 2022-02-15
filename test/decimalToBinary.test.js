import decimalToBinary from '../src/decimalToBinary'

test('decimalToBinary(10) === "1010"', () => {
  expect(decimalToBinary(10)).toBe('1010')
})

test('decimalToBinary(233) ===  "11101001"', () => {
  expect(decimalToBinary(233)).toBe( "11101001")
})
