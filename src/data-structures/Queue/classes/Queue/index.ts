export class Queue<T = any> {
  private count: number;
  private lowestCount: number;
  private items: Record<number, T>;

  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public peek() {
    return this.items[this.lowestCount];
  }

  public enqueue(item: T) {
    this.items[this.count++] = item;
  }

  public dequeue(): T | undefined {
    const item = this.items[this.lowestCount];
    if (!item) {
      return undefined;
    }
    delete this.items[this.lowestCount++];
    return item;
  }

  public isEmpty() {
    return this.count === this.lowestCount;
  }

  public clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public get length() {
    return this.count - this.lowestCount;
  }
}
