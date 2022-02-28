export class Stack<T = any> {
    private items: Array<T> = []

    constructor(initialItems: Array<T> = []) {
      this.items = initialItems;
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    push(item: T) {
      this.items.push(item);
    }

    pop() {
      return this.items.pop();
    }

    isEmpty() {
      return this.items.length === 0;
    }

    clear() {
      this.items = [];
    }
}
