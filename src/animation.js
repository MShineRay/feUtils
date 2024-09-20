/**
 * 动画函数
 * 匀速变化
 * @param from
 * @param to
 * @param duration
 * @param onUpdate
 */
export function animation({
  from,
  to,
  duration=1000,
  onUpdate
}){
  let value = from
  const start = Date.now()
  const speed = (to - from) / duration

  // 让value值变化一点
  function _run(){
    // 改变value值
    const t = Date.now() - start
    if(t>=duration){
      value = to;
      return
    }

    value = from + speed * t
    onUpdate && onUpdate(value)

    // 注册下一次变化
      (_run);
  }
  _run();
}
