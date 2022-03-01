import { Queue } from '.';

describe('queue tests', () => {
  it('should create a queue with initial items', () => {
    const queue = new Queue({ 1: 'a', 2: 'b' });
    expect(queue.peek()).toBe('a');
  });

  it('should create a queue without initial items', () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(undefined);
  });
});
