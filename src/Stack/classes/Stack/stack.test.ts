import { Stack } from './index';

describe('stack tests', () => {
  it('should construct an stack with initial elements and show last element', () => {
    const stack = new Stack<number>([1]);
    expect(stack.peek()).toBe(1);
  });
});
