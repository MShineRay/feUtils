import Stack from "../src/stack3";
const stack = new Stack()

test('stack.isEmpty() === true', () => {
  expect(stack.isEmpty()).toBe(true);
});

test('stack.peek() === 8', () => {

  stack.push(5)
  stack.push(8)

  expect(stack.peek()).toBe(8);

  let objectSymbols = Object.getOwnPropertySymbols(stack)
  expect(objectSymbols.length).toBe(1);
  expect(objectSymbols).toBe([Symbol()]);
  expect(objectSymbols[0]).toBe(Symbol());

});



test('stack.peek() === 8', () => {

  stack.push(5)
  stack.push(8)

  expect(stack.peek()).toBe(8);
});
