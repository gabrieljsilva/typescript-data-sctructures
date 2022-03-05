export class Deck<T = any> {
  private count: number;

  private lowestCount: number;

  private items: Record<number, T>;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  get isEmpty() {
    return this.count === this.lowestCount;
  }

  push(item: T) {
    this.items[this.count++] = item;
  }

  unshift(item: T) {
    if (this.isEmpty) {
      this.push(item);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = item;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = item;
    }
  }

  shift() {
    const item = this.items[this.lowestCount];
    this.lowestCount++;
    delete this.items[this.lowestCount];
    return item;
  }

  peekFront() {
    return this.items[this.lowestCount];
  }
}
