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
    delete this.items[this.lowestCount++];
    return item;
  }
}
