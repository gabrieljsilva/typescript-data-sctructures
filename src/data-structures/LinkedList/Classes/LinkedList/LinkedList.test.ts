import { LinkedList } from '.';

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

    expect(list.peek()).toBe(items[items.length - 1]);
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
});
