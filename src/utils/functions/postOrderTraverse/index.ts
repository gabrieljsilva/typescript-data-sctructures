import { Node } from '../../../data-structures/BinarySearchTree';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/BinarySearchTree';

export function postOrderTraverse<T = any>(
  node?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) {
  if (node) {
    postOrderTraverse(node.left, callback);
    postOrderTraverse(node.right, callback);
    callback?.(node.key);
  }
}
