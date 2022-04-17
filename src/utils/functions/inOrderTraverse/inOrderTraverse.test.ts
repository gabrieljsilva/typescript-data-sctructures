import { BinarySearchTree } from '../../../data-structures/Tree/Classes/BinarySearchTree';
import { inOrderTraverse } from './index';

describe('inOrderTraverse tests', () => {
  it('should iterate a binary search tree using in-order sequence', () => {
    const tree = new BinarySearchTree<number>();
    const inOrderSequence = [1, 2, 3, 4, 5];

    inOrderSequence.forEach((value) => tree.insert(value));

    let orderSequenceIndex = 0;
    inOrderTraverse(tree.root, (key) => {
      expect(key).toBe(inOrderSequence[orderSequenceIndex]);
      orderSequenceIndex++;
    });
  });
});
