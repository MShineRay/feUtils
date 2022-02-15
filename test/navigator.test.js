import { getUAInfo } from '../src/navigator'
const chromeUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
const firefoxUa = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:97.0) Gecko/20100101 Firefox/97.0"
const safariUa = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15"

test('ua', () => {
  expect(getUAInfo(chromeUa).osName).toBe("Mac")
  expect(getUAInfo(chromeUa).osVersion).toBe("10_15_7")
  expect(getUAInfo(chromeUa).browserName).toBe("Chrome")
  expect(getUAInfo(chromeUa).browserVersion).toBe("98.0.4758.80")

  expect(getUAInfo(firefoxUa).osName).toBe("Mac")
  expect(getUAInfo(firefoxUa).osVersion).toBe("10.15")
  expect(getUAInfo(firefoxUa).browserName).toBe("Firefox")
  expect(getUAInfo(firefoxUa).browserVersion).toBe("97.0")

  expect(getUAInfo(safariUa).osName).toBe("Mac")
  expect(getUAInfo(safariUa).osVersion).toBe("10_15_7")
  expect(getUAInfo(safariUa).browserName).toBe("Safari")
  expect(getUAInfo(safariUa).browserVersion).toBe("14.1.1")

})
