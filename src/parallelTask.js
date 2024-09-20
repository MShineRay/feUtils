/**
 * 并发执行任务
 * @param tasks
 * @param parallelCount
 * @returns {Promise<unknown>}
 */
export function parallelTask(tasks, parallelCount=2){
  return new Promise((resolve, reject) =>{
    if(tasks.length===0){
      resolve()
      return
    }
    let nextIndex = 0
    let finishCount = 0// 任务完成数量
    function _run(){
      // 运行下一个任务
      const task = tasks[nextIndex]
      nextIndex++
      task().then(()=>{
        finishCount++
        if(finishCount === tasks.length){
          resolve()
        }else if(nextIndex < tasks.length){
          // 还有下一个任务
          _run()
        }
      }).catch(err=> {
        reject(err)
      })
    }

    for(let i=0; i<parallelCount && i<tasks.length; i++){
      _run()
    }
  })
}
