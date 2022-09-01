export class Deck<T = any> {
  private count: number;
  private lowestCount: number;
  private readonly items: Record<number, T>;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  public get isEmpty() {
    return this.count === this.lowestCount;
  }

  public push(item: T) {
    this.items[this.count++] = item;
  }

  public pop() {
    const item = this.items[--this.count];
    delete this.items[--this.count];
    return item;
  }

  public unshift(item: T) {
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

  public shift() {
    const item = this.items[this.lowestCount];
    this.lowestCount++;
    delete this.items[this.lowestCount];
    return item;
  }

  public peekFront() {
    return this.items[this.lowestCount];
  }

  public peekBack() {
    return this.items[this.count - 1];
  }
}
