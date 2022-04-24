import { BinarySearchTree } from '../../../data-structures/BinarySearchTree/Classes/BinarySearchTree';
import { preOrderTraverse } from './index';

describe('preOrderTraverse tests', () => {
  it('should iterate a binary search tree using pre-order sequence', () => {
    const tree = new BinarySearchTree<number>();
    const preOrderSequence = [2, 1, 4, 3, 6, 5];

    preOrderSequence.forEach((value) => tree.insert(value));

    let orderSequenceIndex = 0;
    preOrderTraverse(tree.root, (key) => {
      expect(key).toBe(preOrderSequence[orderSequenceIndex]);
      orderSequenceIndex++;
    });
  });
});
