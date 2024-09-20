/**
 * 复制文本
 * @param text
 */
export function copyText (text) {
  if(navigator.clipboard){
    // copyText = (text) =>{// 惰性函数方式
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!')
      }, function(err) {
        console.error('Async: Could not copy text: ', err)
      })
    // }
  }else{
    // copyText = (text) =>{// 惰性函数方式
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    // }
  }
}
