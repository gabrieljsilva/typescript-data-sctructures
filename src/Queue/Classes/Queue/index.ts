export class Queue<T = any> {
  private count: number;

  private lowestCount: number;

  private items: Record<number, T>;

  constructor(initialItems: Record<number, T> = {}) {
    this.items = initialItems;
    this.count = Object.keys(initialItems).length;
    this.lowestCount = Math.min(...Object.keys(initialItems).map((n) => Number(n)));
  }

  peek() {
    return this.items[this.lowestCount];
  }
}
