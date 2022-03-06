export class Queue<T = any> {
  private count: number;

  private lowestCount: number;

  private items: Record<number, T>;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  peek() {
    return this.items[this.lowestCount];
  }

  enqueue(item: T) {
    this.items[this.count++] = item;
  }

  dequeue() {
    const item = this.items[this.lowestCount];
    if (!item) {
      return undefined;
    }
    delete this.items[this.lowestCount++];
    return item;
  }

  isEmpty() {
    return this.count === this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  get length() {
    return this.count - this.lowestCount;
  }
}
