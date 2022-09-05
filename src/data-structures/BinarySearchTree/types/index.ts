import { Compare, Iterator } from '../../../utils';
import { Newable } from '../../../utils/types';

export type BinarySearchTreeCompareFN<T = any> = (a: T, b: T) => Compare;
export type BinarySearchTreeCallbackFN<T = any> = (key: T) => void;
export interface BinarySearchTreeOptions<T = any> {
  compareFN?: BinarySearchTreeCompareFN<T>;
  iterator?: Newable<Iterator<T>>;
}
