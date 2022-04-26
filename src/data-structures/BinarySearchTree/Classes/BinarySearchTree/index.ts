import { Compare, defaultCompare } from '../../../../utils/functions/compare';
import { inOrderTraverse } from '../../../../utils/functions/inOrderTraverse';
import { Node } from '../Node';
import {
  BinarySearchTreeCallbackFN,
  BinarySearchTreeCompareFN,
  BinarySearchTreeIterateFN,
  BinarySearchTreeOptions,
} from '../../types';

export class BinarySearchTree<T = any> {
  root?: Node<T>;

  compareFN: BinarySearchTreeCompareFN<T>;

  private iterateFN: BinarySearchTreeIterateFN<T>;

  constructor(
    initialValues?: Iterable<T>,
    options?: BinarySearchTreeOptions<T>,
  ) {
    this.compareFN = options?.compareFN ?? defaultCompare;
    this.iterateFN = options?.iterateFN ?? inOrderTraverse;

    if (initialValues) {
      for (const value of initialValues) {
        this.insert(value);
      }
    }
  }

  forEachKey(callback: BinarySearchTreeCallbackFN<T>) {
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

  get min() {
    return this.minNode(this.root)?.key;
  }

  get max() {
    return this.maxNode(this.root)?.key;
  }

  minNode(node?: Node<T>) {
    let currentNode = node;
    while (currentNode?.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  maxNode(node?: Node<T>) {
    let currentNode = node;
    while (currentNode?.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
}
