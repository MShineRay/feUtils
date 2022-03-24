import { getParam } from '../src/path'

test('getParam', () => {
  // location.href
  expect(getParam("https://test.com?dd=11&&test=??").dd).toBe('11')
  // location.search
  expect(getParam("?dd=11&&test=??").dd).toBe('11')
  expect(getParam("?dd=11&&test=??").test).toBe('??')
})
