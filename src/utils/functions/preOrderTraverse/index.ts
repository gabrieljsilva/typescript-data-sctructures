import { Node } from '../../../data-structures/Tree/Classes/Node';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/Tree/types/index';

export function preOrderTraverse<T = any>(
  node?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) {
  if (node) {
    callback?.(node.key);
    preOrderTraverse(node.left, callback);
    preOrderTraverse(node.right, callback);
  }
}
