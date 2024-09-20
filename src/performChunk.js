/**
 * 分时函数
 * @param datas
 * @param consumer
 * @param chunkSplitter
 */
export function performChunk(datas, consumer, chunkSplitter){
  if(typeof datas === 'number'){
    datas = new Array(datas)
  }
  if(datas.length === 0) return
  if(!chunkSplitter && globalThis.requestIdleCallback){
    chunksplitter = (task)=> {
      requestIdleCallback(idle=>{
        task(()=>idle.timeRemaining()>0)
      })
    }
  }
  let i = 0// 目前应该取出的任务下标
  // 执行下一个任务
  function _run(){
    if(i === datas.length){
      return
    }
    chunkSplitter((hasTime=>{
      const now = Date.now()
      while(hasTime(Date.now() - now) && i < datas.length){
        consumer()
      }
      _run()
    }))
  }
  _run()
}
