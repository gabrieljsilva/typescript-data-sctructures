import { Stack } from './index';

describe('stack tests', () => {
  it('should be able to construct a stack with initial items and show last element', () => {
    const item = 1;
    const stack = new Stack<number>([item]);
    expect(stack.peek()).toBe(item);
  });

  it('should be able to construct a stack without initial items', () => {
    const stack = new Stack<number>();
    expect(stack.peek()).toBe(undefined);
  });

  it('should be able to add an item to the end of a stack and return it', () => {
    const item = 2;
    const stack = new Stack<number>([1]);
    stack.push(item);
    expect(stack.peek()).toBe(item);
  });

  it('should be able to remove last item of the stack and return it', () => {
    const item = 1;
    const stack = new Stack<number>([item]);
    expect(stack.pop()).toBe(item);
  });

  it('should be able to return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be able to return false if the stack is not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should be able to remove all elements of a stack', () => {
    const stack = new Stack([1, 2, 3]);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be able to return the length of the stack', () => {
    const stack = new Stack([0, 1, 2, 3, 4]);
    expect(stack.length()).toBe(5);
  });
});
