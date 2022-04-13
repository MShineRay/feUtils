import {zeroToLocal} from '../src/dateFormat'
test('zeroToLocal(1649818147174,  "YYYY-MM-DD hh:mm:ss")', () => {
  let localTime = 1649818147174 //new Date().getTime()2022-04-13 10:49:07
  console.log(new Date(1649818147174))
  let zeroTime = localTime - 8*3600*1000
  expect(zeroToLocal((zeroTime),  "YYYY-MM-DD hh:mm:ss")).toBe("2022-04-13 10:49:07")
})
