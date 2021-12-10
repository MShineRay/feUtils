// 除了toString方法，我们创建的其他方法的复杂度均为O(1)，代表我们可以直接找到目标元素并对其进行操作（push、pop或peek）。
class Stack {
  constructor() {
    this.count = 0 // 使用一个count属性来帮助我们记录栈的大小（也能帮助我们从数据结构中添加和删除元素）。
    this.items = {  }
    //push(element(s))：添加一个（或几个）新元素到栈顶。
    //pop()：移除栈顶的元素，同时返回被移除的元素。
    //peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
    //isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    //clear()：移除栈里的所有元素。
    //size()：返回栈里的元素个数。该方法和数组的length属性很类似。
  }

  push(element){
    this.items[this.count] = element
    this.count++
  }

  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  peek(){
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.count-1]
  }

  isEmpty(){
    return this.count === 0
  }

  size(){
    return this.count
  }
  clear(){
    this.items = {}
    this.count = 0
  }
  toString(){
    if(this.isEmpty()){
      return ''
    }
    let objString = `${this.items[0]}`
    for(let i=1;i<this.count; i++){
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

export default Stack
