/*!
 * @createDate 2021-08-23
 */
import importConfig from '../dynamic.import.config.js'
const jsUtils = {}
console.log(importConfig)
(async () => {
  for (const key of Object.keys(importConfig)) {
    const { default: myDefault } = await import('./'+key+'.js');
    console.log('key:', key)
    console.log('myDefault:', myDefault)
    jsUtils[key] = myDefault
  }
})();
export default jsUtils
