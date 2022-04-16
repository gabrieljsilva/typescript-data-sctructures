import { Node } from '../../../data-structures/Tree/Classes/Node';
import { BinarySearchTreeCallbackFN } from '../../../data-structures/Tree/Classes/BinarySearchTree/types/index';

export function iterateInOrder<T = any>(
  node?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) {
  if (node) {
    iterateInOrder(node.left, callback);
    callback?.(node.key);
    iterateInOrder(node.right, callback);
  }
}
