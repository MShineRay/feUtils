import { getUAInfo } from '../src/navigator'
const chromeUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
const firefoxUa = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:97.0) Gecko/20100101 Firefox/97.0"
const safariUa = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15"
const chromeUA_Win7 = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1'
const firefoxUA_Win7 = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0'
// windows 7 + Opera
const operaUA_Win7 = 'Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.9.168 Version/11.50'
// window 7 + IE 9
const ieUA_Win7 = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)'

test('ua', () => {
  expect(getUAInfo(chromeUa).osName).toBe("Mac")
  expect(getUAInfo(chromeUa).osVersion).toBe("10_15_7")
  expect(getUAInfo(chromeUa).browserName).toBe("Chrome")
  expect(getUAInfo(chromeUa).browserVersion).toBe("98.0.4758.80")


  expect(getUAInfo(chromeUA_Win7).osName).toBe("Windows")
  expect(getUAInfo(chromeUA_Win7).osVersion).toBe("6.1")
  expect(getUAInfo(chromeUA_Win7).browserName).toBe("Chrome")
  expect(getUAInfo(chromeUA_Win7).browserVersion).toBe("14.0.835.163")

  expect(getUAInfo(firefoxUa).osName).toBe("Mac")
  expect(getUAInfo(firefoxUa).osVersion).toBe("10.15")
  expect(getUAInfo(firefoxUa).browserName).toBe("Firefox")
  expect(getUAInfo(firefoxUa).browserVersion).toBe("97.0")

  expect(getUAInfo(firefoxUA_Win7).osName).toBe("Windows")
  expect(getUAInfo(firefoxUA_Win7).osVersion).toBe("6.1")
  expect(getUAInfo(firefoxUA_Win7).browserName).toBe("Firefox")
  expect(getUAInfo(firefoxUA_Win7).browserVersion).toBe("6.0")

  expect(getUAInfo(safariUa).osName).toBe("Mac")
  expect(getUAInfo(safariUa).osVersion).toBe("10_15_7")
  expect(getUAInfo(safariUa).browserName).toBe("Safari")
  expect(getUAInfo(safariUa).browserVersion).toBe("14.1.1")

  expect(getUAInfo(operaUA_Win7).osName).toBe("Windows")
  expect(getUAInfo(operaUA_Win7).osVersion).toBe("6.1")
  expect(getUAInfo(operaUA_Win7).browserName).toBe("Opera")
  expect(getUAInfo(operaUA_Win7).browserVersion).toBe("11.50")

  expect(getUAInfo(ieUA_Win7).osName).toBe("Windows")
  expect(getUAInfo(ieUA_Win7).osVersion).toBe("6.1")
  expect(getUAInfo(ieUA_Win7).browserName).toBe("IE")
  expect(getUAInfo(ieUA_Win7).browserVersion).toBe("9.0")
})
