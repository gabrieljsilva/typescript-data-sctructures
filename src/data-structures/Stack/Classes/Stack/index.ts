export class Stack<T = any> {
  private items: Array<T> = [];

  constructor(initialItems: Array<T> = []) {
    this.items = initialItems;
  }

  public peek() {
    return this.items[this.items.length - 1];
  }

  public push(item: T) {
    this.items.push(item);
  }

  public pop() {
    return this.items.pop();
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public clear() {
    this.items = [];
  }

  public length() {
    return this.items.length;
  }
}
