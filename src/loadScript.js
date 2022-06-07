/**
 * js 动态插入脚本
 * @param url
 * @param async
 * @param callback
 * @returns {boolean}
 */
export function loadScript(url, async=false, callback) {
  callback = typeof callback === 'function' ? callback : function() {}
  if(isLoadedScript(url)){
    callback()
    return true
  }
  const head = document.getElementsByTagName('head')[0]
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onreadystatechange = function() {
    if(this.readyState === 'loaded' || this.readyState === 'complete'){
      callback()
    }
  }
  script.onload = callback
  script.async = async

  head.appendChild(script)
}


/**
 * 根据url判断html中是否已存在<script src="url"></script>
 * @param url
 * @returns {boolean}
 */
export function isLoadedScript(url){
  const es = document.getElementsByTagName('script');
  for (let i=0,len=es.length; i<len; i++){
    if(es[i].src.indexOf(url)!==-1){
      return true
    }
  }
  return false
}

/**
 * 异步动态导入js库
 * @param url
 * e.g. http://xxx.sdk.min.js
 * @param url
 * @param async
 * @returns {Promise<unknown>}
 */
export function loadScriptAsync (url, async=true) {
  return new Promise((resolve, reject) => {
    if(isLoadedScript(url)){
      resolve()
      return true
    }
    const script = document.createElement('script')

    script.onload = () => resolve();

    script.onerror = () => reject(new Error(`Load script from ${url} failed`));

    script.src = url;
    script.async = async
    const head =
      document.head || document.getElementsByTagName('head')[0];
    (document.body || head).appendChild(script);
  })
}
