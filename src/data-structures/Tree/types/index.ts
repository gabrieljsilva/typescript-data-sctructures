import { Node } from '../Classes/Node';

export type BinarySearchTreeDefaultCompareFN<T = any> = (a: T, b: T) => number;
export type BinarySearchTreeCallbackFN<T> = (key: T) => void;
export type BinarySearchTreeIterateFN<T> = (
  root?: Node<T>,
  callback?: BinarySearchTreeCallbackFN<T>,
) => void;
