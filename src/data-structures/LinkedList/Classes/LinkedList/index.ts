import { defaultEquals } from '../../../../utils/functions/defaultEquals';
import { Node } from '../Node';

type DefaultEqualsFN<T = any> = (a: T, B: T) => boolean

export class LinkedList<T = any> {
  private count: number;

  private head?: Node;

  private defaultEquals: DefaultEqualsFN<T>;

  constructor(equalsFN: DefaultEqualsFN<T> = defaultEquals) {
    this.count = 0;
    this.defaultEquals = equalsFN;
  }

  push(item: T) {
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

  forEach(callbackFN?: (item: T, index: number) => void) {
    let currentItem = this.head;
    let currentIndex = 0;
    while (currentItem?.next) {
      callbackFN?.(currentItem.value, currentIndex);
      currentItem = currentItem.next;
      currentIndex++;
    }
  }

  getElementAt(index: number): T {
    let currentItem = this.head;
    let currentIndex = 0;
    while (currentIndex <= this.count) {
      if (index === currentIndex) {
        return currentItem?.value;
      }
      currentItem = currentItem!.next;
      currentIndex++;
    }
    return currentItem?.value;
  }

  get size() {
    return this.count;
  }
}
