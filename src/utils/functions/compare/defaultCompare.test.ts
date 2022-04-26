import { defaultCompare, Compare } from './index';

describe('defaultCompare tests', () => {
  it('should be able to verify if the first value is less then second value', () => {
    const a = 1,
      b = 2;

    const result = defaultCompare(a, b);
    expect(result).toBe(Compare.LESS_THAN);
  });

  it('should be able to verify if the first value is less then second value', () => {
    const a = 2,
      b = 1;

    const result = defaultCompare(a, b);
    expect(result).toBe(Compare.BIGGER_THEN);
  });
});
