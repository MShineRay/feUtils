/*!
 * @createDate 2021-08-23
 */
import {animation} from './animation'
import  {currying} from './currying'

import {debounce} from './debounce'

import {fileHash, createChunks} from './file.js'

export {generateDeviceId} from './deviceId'

export {lunhCheck} from './luhnCheck'

export {loadScript} from './loadScript'

export {mathSubtract, mathAdd, mathMultiply, mathDivide, mathToFixed} from './math'

export {maskStr} from './string'
export {isLoadedScript} from './loadScript'

export default {
  animation,
  currying,
  debounce,
  generateDeviceId,
  lunhCheck,
  loadScript,
  mathSubtract,
  mathAdd,
  mathMultiply,
  mathDivide,
  mathToFixed,
  maskStr,
  isLoadedScript,
  fileHash,
  createChunks
}
