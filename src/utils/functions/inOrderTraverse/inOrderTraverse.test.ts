import { BinarySearchTree } from '../../../data-structures/BinarySearchTree/Classes/BinarySearchTree';
import { inOrderTraverse } from './index';

describe('inOrderTraverse tests', () => {
  it('should be able to iterate a binary search tree using in-order sequence', () => {
    const tree = new BinarySearchTree<number>();
    const inOrderSequence = [0, 1, 2, 3, 4, 5];
    const insertionSequence = [2, 1, 0, 4, 3, 5];

    insertionSequence.forEach((value) => tree.insert(value));

    let orderSequenceIndex = 0;
    inOrderTraverse(tree.root, (key) => {
      expect(key).toBe(inOrderSequence[orderSequenceIndex]);
      orderSequenceIndex++;
    });
  });
});
