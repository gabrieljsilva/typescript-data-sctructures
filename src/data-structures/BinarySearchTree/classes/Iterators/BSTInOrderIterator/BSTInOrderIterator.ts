import { Iterator } from '../../../../../utils';
import { Node } from '../../Node';
import { BinarySearchTree } from '../../BinarySearchTree';
import { Queue } from '../../../../Queue';
import { BinarySearchTreeCallbackFN } from '../../../types';

export class BSTInOrderIterator<T = any> implements Iterator<T> {
  private itemsQueue = new Queue<T>();

  constructor(tree: BinarySearchTree<T>) {
    this.inOrderTraverse(tree.root, (node) => this.itemsQueue.enqueue(node.key));
  }

  private inOrderTraverse(node?: Node<T>, callback?: BinarySearchTreeCallbackFN<Node<T>>) {
    if (node) {
      this.inOrderTraverse(node.left, callback);
      callback?.(node);
      this.inOrderTraverse(node.right, callback);
    }
  }

  hasNext() {
    return this.itemsQueue.peek() !== undefined;
  }

  next(): T | undefined {
    return this.itemsQueue.dequeue();
  }
}
