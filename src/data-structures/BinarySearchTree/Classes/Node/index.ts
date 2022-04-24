export class Node<T = any> {
  key: T;

  left?: Node;

  right?: Node;

  constructor(key: T) {
    this.key = key;
  }
}
