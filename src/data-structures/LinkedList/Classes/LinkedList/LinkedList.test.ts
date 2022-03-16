import { LinkedList } from '.';
import { Node } from '../Node';

describe('LinkedList tests', () => {
  it('should create an LinkedList', () => {
    const list = new LinkedList();
    expect(list instanceof LinkedList).toBeTruthy();
  });

  it('should add an item to the end of a list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => {
      list.push(item);
    });

    expect(list.getElementAt(list.size - 1)).toBe(items[items.length - 1]);
  });

  it('should execute callback for every item on list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => {
      list.push(item);
    });

    list.forEach((item, index) => {
      expect(item).toBe(items[index]);
    });
  });

  it('should get element from an index', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => {
      list.push(item);
    });

    expect(list.getElementAt(list.size - 1)).toBe(items[items.length - 1]);
  });

  it('should return undefined if cannot find an element in a list', () => {
    const list = new LinkedList<number>();

    expect(list.getElementAt(1)).toBe(undefined);
  });

  it('should return undefined if try to access a negative index', () => {
    const list = new LinkedList<number>();

    expect(list.getElementAt(-1)).toBe(undefined);
  });

  it('should get the number of elements in a list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => {
      list.push(item);
    });

    expect(list.size).toBe(items.length);
  });

  it('should remove an element from a list', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 4, 5];

    items.forEach((item) => {
      list.push(item);
    });

    const indexToRemove = 2;

    expect(list.size).toBe(items.length);
    expect(list.getElementAt(indexToRemove)).toBe(3);
    list.remove(indexToRemove);
    expect(list.getElementAt(2)).toBe(4);
    expect(list.size).toBe(items.length - 1);
  });

  it('should set head as undefined when remove last item from a list', () => {
    const list = new LinkedList<number>();
    list.push(1);
    expect(list.size).toBe(1);

    list.remove(0);

    expect(list.size).toBe(0);
  });

  it('should return the node of a given index', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 4, 5];

    items.forEach((item) => {
      list.push(item);
    });

    const indexToFind = 0;

    const node = list.getNodeAt(indexToFind);
    expect(node instanceof Node).toBeTruthy();
    expect(node?.value).toBe(items[indexToFind]);
  });
});
