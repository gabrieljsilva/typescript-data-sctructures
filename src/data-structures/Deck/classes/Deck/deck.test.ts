import { Deck } from '.';

describe('deck tests', () => {
  it('should be defined', () => {
    const deck = new Deck();
    expect(deck).toBeInstanceOf(Deck);
  });

  it('should be able to return true if is empty', () => {
    const deck = new Deck();
    expect(deck.isEmpty).toBe(true);
  });

  it('should be able to add an item in front of a deck if deck is empty', () => {
    const deck = new Deck();
    const item = 1;
    deck.unshift(item);
    expect(deck.peekFront()).toBe(item);
  });

  it('should be able to add an item in front of a deck if deck is not empty', () => {
    const deck = new Deck();
    const item = 1;
    deck.unshift(item);
    expect(deck.peekFront()).toBe(item);
  });

  it('should be able to add an item in front of a deck if lowestCount > 0', () => {
    const deck = new Deck();
    deck.unshift(1);
    deck.unshift(2);
    deck.shift();
    deck.unshift(3);
    expect(deck.peekFront()).toBe(3);
  });

  it('should be able to add an item in the end of deck ', () => {
    const deck = new Deck();
    const item = 2;
    deck.push(1);
    deck.push(item);
    expect(deck.peekBack()).toBe(item);
  });

  it('should be able to remove an item from the end of deck and return it', () => {
    const deck = new Deck();
    const item = 2;
    deck.push(1);
    deck.push(item);
    expect(deck.pop()).toBe(item);
  });
});
