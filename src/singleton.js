/**
 * 单例
 * @param className
 * @returns {function(): *}
 */
export function singleton(className){
  let instance = null
  return function(){
    if(instance === null){
      instance = new className()
    }
    return instance
  }
}
