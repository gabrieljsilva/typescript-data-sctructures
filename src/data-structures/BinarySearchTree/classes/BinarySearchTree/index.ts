import { Compare, defaultCompare } from '../../../../utils';
import { inOrderTraverse } from '../../../../utils';
import { Node } from '../Node';
import {
  BinarySearchTreeCallbackFN,
  BinarySearchTreeCompareFN,
  BinarySearchTreeIterateFN,
  BinarySearchTreeOptions,
} from '../../types';

export class BinarySearchTree<T = any> {
  public root?: Node<T>;
  public compareFN: BinarySearchTreeCompareFN<T>;
  private readonly iterateFN: BinarySearchTreeIterateFN<T>;

  constructor(initialValues?: Iterable<T>, options?: BinarySearchTreeOptions<T>) {
    this.compareFN = options?.compareFN ?? defaultCompare;
    this.iterateFN = options?.iterateFN ?? inOrderTraverse;

    if (initialValues) {
      for (const value of initialValues) {
        this.insert(value);
      }
    }
  }

  public forEachKey(callback: BinarySearchTreeCallbackFN<T>) {
    this.iterateFN(this.root, callback);
  }

  public insert(key: T) {
    if (this.root) {
      this.insertNode(this.root, key);
    } else {
      this.root = new Node(key);
    }
  }

  public insertNode(node: Node, key: T) {
    const newNode = new Node(key);
    const isKeyLessThanCurrentNodeKey = this.compareFN(key, node.key) === Compare.LESS_THAN;
    if (isKeyLessThanCurrentNodeKey) {
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

  public get min() {
    return this.minNode(this.root)?.key;
  }

  public get max() {
    return this.maxNode(this.root)?.key;
  }

  public minNode(node?: Node<T>) {
    let currentNode = node;
    while (currentNode?.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  public maxNode(node?: Node<T>) {
    let currentNode = node;
    while (currentNode?.right) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
}
