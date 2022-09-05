import { Iterator } from '../../../../../utils';
import { Node } from '../../Node';
import { BinarySearchTree } from '../../BinarySearchTree';
import { Queue } from '../../../../Queue';
import { BinarySearchTreeCallbackFN } from '../../../types';

export class BSTInOrderIterator<T = any> implements Iterator<T> {
  private itemsQueue = new Queue<T>();

  constructor(tree: BinarySearchTree<T>) {
    this.traverse(tree.root, (node) => this.itemsQueue.enqueue(node.key));
  }

  private traverse(node?: Node<T>, callback?: BinarySearchTreeCallbackFN<Node<T>>) {
    if (node) {
      this.traverse(node.left, callback);
      callback?.(node);
      this.traverse(node.right, callback);
    }
  }

  hasNext() {
    return this.itemsQueue.peek() !== undefined;
  }

  next(): T | undefined {
    return this.itemsQueue.dequeue();
  }
}
