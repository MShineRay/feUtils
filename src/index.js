/*!
 * @createDate 2021-08-23
 */
import {animation} from './animation'
import { addMethod } from './addMethod'

import  {currying} from './currying'
import {copyText} from './copyText'

import {debounce} from './debounce'

import {fileHash, createChunks} from './file.js'
import { filterInt } from './filterInt'


import { parallelTask } from './parallelTask'
import { performChunk } from './performChunk'

export {generateDeviceId} from './deviceId'

export {lunhCheck} from './luhnCheck'

export {loadScript} from './loadScript'

export {mathSubtract, mathAdd, mathMultiply, mathDivide, mathToFixed} from './math'

export {maskStr} from './string'
export {isLoadedScript} from './loadScript'

import { singleton } from './singleton'

export default {
  animation,
  addMethod,
  currying,
  copyText,
  createChunks,
  debounce,
  fileHash,
  filterInt,
  generateDeviceId,
  isLoadedScript,
  lunhCheck,
  loadScript,
  mathSubtract,
  mathAdd,
  mathMultiply,
  mathDivide,
  mathToFixed,
  maskStr,
  parallelTask,
  performChunk,
  singleton
}
