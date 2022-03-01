import { Queue } from '.';

describe('queue tests', () => {
  it('should create a queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(undefined);
  });

  it('should add an element to the end of a queue', () => {
    const item = 1;
    const item2 = 2;
    const queue = new Queue();
    queue.enqueue(item);
    queue.enqueue(item2);
    expect(queue.peek()).toBe(item);
  });
});
