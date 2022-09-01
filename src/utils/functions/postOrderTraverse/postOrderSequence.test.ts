import { BinarySearchTree } from '../../../data-structures/BinarySearchTree/classes/BinarySearchTree';
import { postOrderTraverse } from './index';

describe('postOrderTraverse tests', () => {
  it('should be able to iterate a binary search tree using post-order sequence', () => {
    const tree = new BinarySearchTree<number>();
    const postOrderSequence = [0, 1, 3, 5, 4, 2];
    const insertionSequence = [2, 1, 0, 4, 3, 5];

    insertionSequence.forEach((value) => tree.insert(value));

    let orderSequenceIndex = 0;
    postOrderTraverse(tree.root, (key) => {
      expect(key).toBe(postOrderSequence[orderSequenceIndex]);
      orderSequenceIndex++;
    });
  });
});
