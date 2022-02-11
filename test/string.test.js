import { maskStr } from '../src'

test('maskStr("12345678901") === "1234***8901"', () => {
  expect(maskStr("12345678901")).toBe("1234***8901")
})
