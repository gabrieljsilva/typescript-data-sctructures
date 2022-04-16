import { Compare, defaultCompare } from '../../../../utils/functions/compare';
import { iterateInOrder } from '../../../../utils/functions/inOrderIterateTree';
import { Node } from '../Node';
import {
  BinarySearchTreeCallbackFN,
  BinarySearchTreeDefaultCompareFN,
  BinarySearchTreeIterateFN,
} from './types';

export class BinarySearchTree<T = any> {
  root?: Node<T>;

  compareFN: BinarySearchTreeDefaultCompareFN<T>;

  private iterateFN: BinarySearchTreeIterateFN<T>;

  constructor(
    compareFN: BinarySearchTreeDefaultCompareFN<T> = defaultCompare,
    iterateFN: BinarySearchTreeIterateFN<T> = iterateInOrder,
  ) {
    this.compareFN = compareFN;
    this.iterateFN = iterateFN;
  }

  forEach(callback: BinarySearchTreeCallbackFN<T>) {
    this.iterateFN(this.root, callback);
  }

  insert(key: T) {
    if (this.root) {
      this.insertNode(this.root, key);
    } else {
      this.root = new Node(key);
    }
  }

  insertNode(node: Node, key: T) {
    const newNode = new Node(key);

    if (this.compareFN(key, node.key) === Compare.LESS_THAN) {
      if (node?.left) {
        this.insertNode(node.left, key);
      } else {
        node.left = newNode;
      }
    } else if (node.right) {
      this.insertNode(node.right, key);
    } else {
      node.right = newNode;
    }
  }
}
