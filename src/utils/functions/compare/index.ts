export const Compare = {
  LESS_THAN: -1,
  BIGGER_THEN: 1,
};

export function defaultCompare<T = any>(a: T, b: T) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THEN;
}
