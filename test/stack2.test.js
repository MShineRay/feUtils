import Stack from '../src/stack2'
const stack = new Stack()

test('stack.isEmpty() === true', () => {
  expect(stack.isEmpty()).toBe(true)
})

test('stack.peek() === 8', () => {

  stack.push(5)
  stack.push(8)

  expect(stack.peek()).toBe(8)
})



test('stack.peek() === 8', () => {

  stack.push(5)
  stack.push(8)

  expect(stack.peek()).toBe(8)
})
