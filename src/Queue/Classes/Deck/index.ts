export class Deck<T = any> {
  private count: number;

  private lowestCount: number;

  private items: Record<number, T>;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  isEmpty() {
    return this.count === this.lowestCount;
  }
}
