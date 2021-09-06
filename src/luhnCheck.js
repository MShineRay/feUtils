/**
 * @reference http://rosettacode.org/wiki/Luhn_test_of_credit_card_numbers#JavaScript
 * @reference https://en.wikipedia.org/wiki/Payment_card_number
 * https://www.cnblogs.com/cc11001100/p/9357177.html
 * 1. 从右到左给卡号字符串编号，最右边第一位是1，最右边第二位是2，最右边第三位是3….
 * 2. 从右向左遍历，对每一位字符t执行第三个步骤，并将每一位的计算结果相加得到一个数s。
 * 3. 对每一位的计算规则：如果这一位是奇数位，则返回t本身，如果是偶数位，则先将t乘以2得到一个数n，如果n是一位数（小于10），直接返回n，否则将n的个位数和十位数相加返回。
 * 4. 如果s能够整除10，则此号码有效，否则号码无效。
 * 因为最终的结果会对10取余来判断是否能够整除10，所以又叫做模10算法。
 */
/**
 * 校验卡号
 * @param str
 * @returns {boolean}
 */
export function lunhCheck(str) {
  const sumDigit = (c) => (c < 10)
    ? c
    : sumDigit(Math.trunc(c / 10) + (c % 10))

  return str.split('').reverse()
    .map(Number)
    .map((c, i) => i % 2 !== 0 ? sumDigit(c * 2) : c)
    .reduce((acc, v) => acc + v) % 10 === 0
}

