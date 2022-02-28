import { Stack } from './index';

describe('stack tests', () => {
  it('should construct an stack with initial items and show last element', () => {
    const item = 1;
    const stack = new Stack<number>([item]);
    expect(stack.peek()).toBe(item);
  });

  it('should add an item to the end of a stack and return it', () => {
    const item = 2;
    const stack = new Stack<number>([1]);
    stack.push(item);
    expect(stack.peek()).toBe(item);
  });

  it('should remove last item of the stack and return it', () => {
    const item = 1;
    const stack = new Stack<number>([item]);
    expect(stack.pop()).toBe(item);
  });
});
