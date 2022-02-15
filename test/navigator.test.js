import { getUAInfo } from '../src/navigator'
const uaList = [
  {
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36',
    browserName: 'Chrome',
    browserVersion: '98.0.4758.80',
    osName: 'Mac',
    osVersion: '10_15_7'
  },
  {
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:97.0) Gecko/20100101 Firefox/97.0",
    browserName: 'Firefox',
    browserVersion: '97.0',
    osName: 'Mac',
    osVersion: '10.15'
  },
  {
    ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15",
    browserName: 'Safari',
    browserVersion: '14.1.1',
    osName: 'Mac',
    osVersion: '10_15_7'
  },
  {
    ua: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50",
    browserName: 'Safari',
    browserVersion: '5.1',
    osName: 'Windows',
    osVersion: '6.1'
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.163 Safari/535.1',
    browserName: 'Chrome',
    browserVersion: '14.0.835.163',
    osName: 'Windows',
    osVersion: '6.1'
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0) Gecko/20100101 Firefox/6.0',
    browserName: 'Firefox',
    browserVersion: '6.0',
    osName: 'Windows',
    osVersion: '6.1'
  },
  {
    ua: 'Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.9.168 Version/11.50',
    browserName: 'Opera',
    browserVersion: '11.50',
    osName: 'Windows',
    osVersion: '6.1'
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; Tablet PC 2.0; .NET4.0E)',
    browserName: 'IE',
    browserVersion: '9.0',
    osName: 'Windows',
    osVersion: '6.1'
  },
  {
    ua:"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)",
    browserName: 'IE',
    browserVersion: '8.0',
    osName: 'Windows',
    osVersion: '6.1'
  }
]

test('ua', () => {
  for (let i=0, len=uaList.length; i<len; i++){
    let item = uaList[i]
    let uaInfo = getUAInfo(item.ua)
    expect(uaInfo.osName).toBe(item.osName)
    expect(uaInfo.osVersion).toBe(item.osVersion)
    expect(uaInfo.browserName).toBe(item.browserName)
    expect(uaInfo.browserVersion).toBe(item.browserVersion)
  }
})
