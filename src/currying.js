/**
 * 将函数柯里化
 * @param fn
 * @param args
 * @returns {any}
 */
export function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return function(...args2) {
      return currying(fn, ...args, ...args2);
    };
  }
}

// const add = (a, b, c) => a + b + c;
//
//  console.log(currying(add)(1)(2)(3)); // 6)
//  console.log(currying(add,1)(2)(3)); // 6)
//  console.log(currying(add,1,2)(3)); // 6)
//  console.log(currying(add,1,2,3)); // 6)
//  console.log(currying(add,1)(2,3)); // 6)
