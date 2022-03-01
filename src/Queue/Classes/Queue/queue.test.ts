import { Queue } from '.';

describe('queue tests', () => {
  it('should create a queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(undefined);
  });

  it('should add an item to the end of a queue', () => {
    const item = 1;
    const item2 = 2;
    const queue = new Queue();
    queue.enqueue(item);
    queue.enqueue(item2);
    expect(queue.peek()).toBe(item);
  });

  it('should remove and item from the beginning of the queue', () => {
    const item = 1;
    const queue = new Queue();
    queue.enqueue(item);

    expect(queue.dequeue()).toBe(item);
    expect(queue.peek()).toBe(undefined);
  });

  it('should return undefined when dequeue an empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(undefined);
  });
});
