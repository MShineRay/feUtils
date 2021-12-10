// 除了toString方法，我们创建的其他方法的复杂度均为O(1)，代表我们可以直接找到目标元素并对其进行操作（push、pop或peek）。
// Stack类的用户只能访问我们在类中暴露的方法

// 应用
// 在回溯问题中，它可以存储访问过的任务或路径、撤销的操作（后面的章节讨论图和回溯问题时，我们会学习如何应用这个例子）。Java和C#用栈来存储变量和方法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常
// 十进制转二进制
const _items = Symbol('stackItems')
class Stack {
  constructor() {
    // 下划线命名约定就是在属性名称之前加上一个下划线（_）。不过这种方式只是一种约定，并不能保护数据，而且只能依赖于使用我们代码的开发者所具备的常识。
    // this._count = 0 // 使用一个_count属性来帮助我们记录栈的大小（也能帮助我们从数据结构中添加和删除元素）。
    this[_items] = []
    //push(element(s))：添加一个（或几个）新元素到栈顶。
    //pop()：移除栈顶的元素，同时返回被移除的元素。
    //peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
    //isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    //clear()：移除栈里的所有元素。
    //size()：返回栈里的元素个数。该方法和数组的length属性很类似。
  }

  push(element){
    this[_items][this._count] = element
    this._count++
  }

  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this._count--
    const result = this[_items][this._count]
    delete this[_items][this._count]
    return result
  }

  peek(){
    if(this.isEmpty()){
      return undefined
    }
    return this[_items][this._count-1]
  }

  isEmpty(){
    return this._count === 0
  }

  size(){
    return this._count
  }
  clear(){
    this[_items] = {}
    this._count = 0
  }
  toString(){
    if(this.isEmpty()){
      return ''
    }
    let objString = `${this[_items][0]}`
    for(let i=1;i<this._count; i++){
      objString = `${objString}, ${this[_items][i]}`
    }
    return objString
  }
}

export default Stack
