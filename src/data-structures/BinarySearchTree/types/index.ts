import { Compare } from '../../../utils/functions/compare';
import { Node } from '../Classes';

export type BinarySearchTreeCompareFN<T = any> = (a: T, b: T) => Compare;
export type BinarySearchTreeCallbackFN<T = any> = (key: T) => void;
export type BinarySearchTreeIterateFN<T = any> = (
  root?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) => void;
export interface BinarySearchTreeOptions<T = any> {
  iterateFN?: BinarySearchTreeIterateFN<T>;
  compareFN?: BinarySearchTreeCompareFN<T>;
}
