import { Compare } from '../../../utils/functions/compare';
import { Node } from '../Classes/Node';

export type BinarySearchTreeDefaultCompareFN<T = any> = (a: T, b: T) => Compare;
export type BinarySearchTreeCallbackFN<T> = (key: T) => void;
export type BinarySearchTreeIterateFN<T> = (
  root?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) => void;
