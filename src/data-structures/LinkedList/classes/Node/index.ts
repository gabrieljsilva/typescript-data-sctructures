export class Node<T = any> {
  public value: T;
  public next?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}
