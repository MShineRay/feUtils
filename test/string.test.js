import { maskStr } from '../src'
import { serialize } from '../src/string'

test('maskStr', () => {
  expect(maskStr("12345678901")).toBe("1234***8901")
  expect(maskStr("dddd3333")).toBe("dddd3333")
  expect(maskStr("")).toBe("")
  expect(maskStr("12345678901", 2,2,'-')).toBe("12-------01")
  expect(maskStr("12345678901", 3)).toBe("123****8901")
  // expect(maskStr("12345678901", undefined,3)).toBe("1234****901")
})

test('serialize', () => {
  expect(serialize({data:1, test:2})).toBe("data=1&test=2")
  expect(serialize()).toBe("")
})
