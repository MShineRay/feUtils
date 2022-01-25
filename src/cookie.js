/**
 * cookie 工具类
 */


export const getCookie = function (name) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) return unescape(arr[2])
  return null
}


export const getCookie2 = c_name => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=')
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}

export const setCookie = (name, value, expiredays) => {
  let cookie = name + '=' + value + ';'
  if (expiredays) {
    let d = new Date()
    d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000))
    let expires = 'expires=' + d.toGMTString()
    cookie = cookie + ' ' + expires
  }
  document.cookie = cookie
}
