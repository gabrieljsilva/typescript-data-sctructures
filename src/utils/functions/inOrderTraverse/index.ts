import { Node } from '../../../data-structures/Tree/Classes/Node';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/Tree/types/index';

export function inOrderTraverse<T = any>(
  node?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) {
  if (node) {
    inOrderTraverse(node.left, callback);
    callback?.(node.key);
    inOrderTraverse(node.right, callback);
  }
}
