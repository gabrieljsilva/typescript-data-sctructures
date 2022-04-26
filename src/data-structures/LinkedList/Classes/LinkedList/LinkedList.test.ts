import { LinkedList } from '.';
import { Node } from '../Node';

describe('LinkedList tests', () => {
  it('should be defined', () => {
    const list = new LinkedList();
    expect(list instanceof LinkedList).toBeTruthy();
  });

  it('should be able to add an item to the end of a list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => list.push(item));

    expect(list.getElementAt(list.size - 1)).toBe(items[items.length - 1]);
  });

  it('should be able to execute callback for every item on list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => list.push(item));

    list.forEach((item, index) => {
      expect(item).toBe(items[index]);
    });
  });

  it('should be able to get element from an index', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => list.push(item));

    expect(list.getElementAt(list.size - 1)).toBe(items[items.length - 1]);
  });

  it('should be able to return undefined if cannot find an element in a list', () => {
    const list = new LinkedList<number>();

    expect(list.getElementAt(1)).toBe(undefined);
  });

  it('should be able to return undefined if try to access a negative index', () => {
    const list = new LinkedList<number>();

    expect(list.getElementAt(-1)).toBe(undefined);
  });

  it('should be able to get the number of elements in a list', () => {
    const items = [1, 2, 3, 4, 5];
    const list = new LinkedList<number>();

    items.forEach((item) => list.push(item));

    expect(list.size).toBe(items.length);
  });

  it('should be able to remove an element from a list', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 4, 5];

    items.forEach((item) => list.push(item));

    const indexToRemove = 2;

    expect(list.size).toBe(items.length);
    expect(list.getElementAt(indexToRemove)).toBe(3);
    list.remove(indexToRemove);
    expect(list.getElementAt(2)).toBe(4);
    expect(list.size).toBe(items.length - 1);
  });

  it('should be able to set head as undefined when remove last item from a list', () => {
    const list = new LinkedList<number>();
    list.push(1);
    expect(list.size).toBe(1);

    list.remove(0);

    expect(list.size).toBe(0);
  });

  it('should be able to return the node of a given index', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 4, 5];

    items.forEach((item) => list.push(item));

    const indexToFind = 0;

    const node = list.getNodeAt(indexToFind);
    expect(node instanceof Node).toBeTruthy();
    expect(node?.value).toBe(items[indexToFind]);
  });

  it('should be able to insert an item in given index of a list', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 5];
    items.forEach((item) => list.push(item));

    const indexToUpdate = 2;
    const valueToAdd = 4;

    const hasAdded = list.insert(valueToAdd, indexToUpdate);

    expect(list.getElementAt(indexToUpdate)).toBe(valueToAdd);
    expect(list.size).toBe(items.length + 1);
    expect(hasAdded).toBe(true);
  });

  it('should be able to insert and item in first position of a list', () => {
    const list = new LinkedList<number>();

    const indexToUpdate = 0;
    const valueToAdd = 1;

    const hasAdded = list.insert(valueToAdd, indexToUpdate);

    expect(list.getElementAt(indexToUpdate)).toBe(valueToAdd);
    expect(list.size).toBe(1);
    expect(hasAdded).toBe(true);
  });

  it('should be able to not add an item if index is out of range', () => {
    const list = new LinkedList<number>();

    const indexToUpdate = 1;
    const valueToAdd = 1;

    const hasAdded = list.insert(valueToAdd, indexToUpdate);

    expect(list.size).toBe(0);
    expect(hasAdded).toBe(false);
  });

  it('should be able to not add an item if index is negative', () => {
    const list = new LinkedList<number>();

    const indexToUpdate = -1;
    const valueToAdd = 1;

    const hasAdded = list.insert(valueToAdd, indexToUpdate);

    expect(list.size).toBe(0);
    expect(hasAdded).toBe(false);
  });

  it('should be able to iterate every item using for...of sintaxe', () => {
    const list = new LinkedList<number>();
    const items = [1, 2, 3, 5];
    items.forEach((item) => list.push(item));

    for (const item of list) {
      expect(items.includes(item)).toBe(true);
    }
  });
});
