import Queue from '../src/queue'
const queue = new Queue()

test('queue.isEmpty() === true', () => {
  expect(queue.isEmpty()).toBe(true)
})

test('queue.enqueue().toString()', () => {

  queue.enqueue(5)
  queue.enqueue(8)

  expect(queue.toString()).toBe('5, 8')
})
