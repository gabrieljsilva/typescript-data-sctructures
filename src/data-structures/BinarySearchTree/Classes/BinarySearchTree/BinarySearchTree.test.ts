import { preOrderTraverse } from '../../../../utils/functions/preOrderTraverse';
import { BinarySearchTree } from './index';

describe('BinarySearchTree tests', () => {
  it('should insert a value in BinarySearchTree sorted in ascending order', () => {
    const tree = new BinarySearchTree<number>();
    const randomSequence = [1, 4, 6, 3, 5, 2];
    randomSequence.forEach((value) => tree.insert(value));
    randomSequence.sort();
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(randomSequence[sequenceIndex++]);
    });
  });

  it('should iterate a tree with in order traverse sequence by default', () => {
    const tree = new BinarySearchTree<number>();
    const inOrderSequence = [1, 2, 3, 4, 5, 6];
    inOrderSequence.forEach((value) => tree.insert(value));
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(inOrderSequence[sequenceIndex++]);
    });
  });

  it('should exchange default iterate method', () => {
    const tree = new BinarySearchTree<number>(preOrderTraverse);
    const preOrderSequence = [2, 1, 4, 3, 6, 5];
    preOrderSequence.forEach((value) => tree.insert(value));
    let sequenceIndex = 0;
    tree.forEachKey((value) => {
      expect(value).toBe(preOrderSequence[sequenceIndex++]);
    });
  });
});
