import { Compare, defaultCompare, Iterator } from '../../../../utils';
import { Node } from '../Node';
import { BinarySearchTreeCompareFN, BinarySearchTreeOptions } from '../../types';
import { Newable } from '../../../../utils/types';
import { BSTInOrderIterator } from '../Iterators';

export class BinarySearchTree<T = any> {
  public root?: Node<T>;
  public compareFN: BinarySearchTreeCompareFN<T>;
  private readonly iterator: Newable<Iterator<T>>;

  constructor(initialValues?: Iterable<T>, options?: BinarySearchTreeOptions<T>) {
    this.compareFN = options?.compareFN ?? defaultCompare;
    this.iterator = options?.iterator ?? BSTInOrderIterator;

    if (initialValues) {
      for (const value of initialValues) {
        this.insert(value);
      }
    }
  }

  public *[Symbol.iterator]() {
    const iterator = this.getIterator();
    while (iterator.hasNext()) {
      yield iterator.next();
    }
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

  public getIterator() {
    return new this.iterator(this);
  }
}
