import { Stack } from './index';

describe('stack tests', () => {
  it('should construct an stack with initial elements and show last element', () => {
    const stack = new Stack<number>([1]);
    expect(stack.peek()).toBe(1);
  });

  it('should add an element to the end of a stack and return it', () => {
    const stack = new Stack<number>([1]);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });
});
