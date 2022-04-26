import { Node } from '.';

describe('Binary Search Tree node tests', () => {
  it('should be defined', () => {
    const node = new Node(undefined);
    expect(node instanceof Node).toBe(true);
  });
});
