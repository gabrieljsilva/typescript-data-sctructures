import { defaultEquals } from './index';

describe('default equals tests', () => {
  it('should return true', () => {
    expect(defaultEquals(1, 1)).toBe(true);
  });

  it('should return false', () => {
    expect(defaultEquals(1, 2)).toBe(false);
  });
});
