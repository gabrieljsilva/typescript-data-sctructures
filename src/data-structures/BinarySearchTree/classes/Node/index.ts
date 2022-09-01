export class Node<T = any> {
  public key: T;
  public left?: Node;
  public right?: Node;

  constructor(key: T) {
    this.key = key;
  }
}
