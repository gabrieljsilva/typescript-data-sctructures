import { Node } from '../../../data-structures/BinarySearchTree';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/BinarySearchTree';

export function inOrderTraverse<T = any>(node?: Node<T>, callback?: BinarySearchTreeCallbackFN<T>) {
  if (node) {
    inOrderTraverse(node.left, callback);
    callback?.(node.key);
    inOrderTraverse(node.right, callback);
  }
}
