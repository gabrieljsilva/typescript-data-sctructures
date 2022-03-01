import { Deck } from '.';

describe('deck tests', () => {
  it('should create a deck', () => {
    const deck = new Deck();
    expect(deck instanceof Deck).toBe(true);
  });

  it('should return true if is empty', () => {
    const deck = new Deck();
    expect(deck.isEmpty()).toBe(true);
  });
});
