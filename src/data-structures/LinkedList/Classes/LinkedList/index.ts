import { Node } from '../Node';

export class LinkedList<T = any> {
  private count: number;
  private head?: Node;

  constructor() {
    this.count = 0;
  }

  public *[Symbol.iterator]() {
    let currentItem = this.head;
    while (currentItem) {
      yield currentItem.value;
      currentItem = currentItem?.next;
    }
  }

  public push(item: T) {
    if (this.count === 0) {
      this.head = new Node(item);
    } else {
      let currentItem = this.head;
      while (currentItem?.next) {
        currentItem = currentItem.next;
      }
      currentItem!.next = new Node(item);
    }
    this.count++;
  }

  public forEach(callbackFN?: (item: T, index: number) => void) {
    let currentItem = this.head;
    let currentIndex = 0;
    while (currentItem?.next) {
      callbackFN?.(currentItem.value, currentIndex);
      currentItem = currentItem.next;
      currentIndex++;
    }
  }

  public getElementAt(index: number): T | undefined {
    const node = this.getNodeAt(index);
    return node?.value;
  }

  public getNodeAt(index: number): Node | undefined {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  public remove(index: number) {
    if (index === 0) {
      this.head = undefined;
    } else {
      const previousItem = this.getNodeAt(index - 1);
      const current = previousItem?.next;
      previousItem!.next = current?.next;
    }
    this.count--;
  }

  public insert(value: T, index: number) {
    const node = new Node(value);
    if (this.count < index || index < 0) {
      return false;
    }
    if (index === 0) {
      this.head = node;
    } else {
      const previousItem = this.getNodeAt(index - 1);
      const currentItem = previousItem?.next;
      node.next = currentItem;
      previousItem!.next = node;
    }
    this.count++;
    return true;
  }

  public get size() {
    return this.count;
  }
}
