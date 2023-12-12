/**
 * 用户设备id
 *
 * @returns {number|number}
 * @reference https://dlocal.gitbook.io/dlocal-china/api-dui-jie-wen-dang/payins-api-wen-dang/qi-zha-yu-fang#device-id
 */

function checksum(s) {
  let hash = 0, strLen = s.length, i, c
  if ( strLen === 0 ) {
    return hash
  }
  for ( i = 0; i < strLen; i++ ) {
    c = s.charCodeAt( i )
    hash = ((hash << 5) - hash) + c
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

export function generateDeviceId() {
  const nav = window.navigator
  const screen = window.screen
  let deviceId = nav.mimeTypes.length
  Object.values(navigator.mimeTypes).forEach(mime => deviceId += mime.type)
  deviceId += nav.userAgent.replace(/\D+/g, '')//Only use digits
  deviceId += nav.plugins.length
  Object.values(navigator.plugins).forEach(p => deviceId += p.filename)
  deviceId += screen.height || ''
  deviceId += screen.width || ''
  deviceId += screen.pixelDepth || ''
  return checksum(deviceId)
}
