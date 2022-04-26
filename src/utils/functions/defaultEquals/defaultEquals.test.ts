import { defaultEquals } from './index';

describe('default equals tests', () => {
  it('should be able to return true if the values are equal', () => {
    expect(defaultEquals(1, 1)).toBe(true);
  });

  it('should be able to return false if the values are not equal', () => {
    expect(defaultEquals(1, 2)).toBe(false);
  });
});
