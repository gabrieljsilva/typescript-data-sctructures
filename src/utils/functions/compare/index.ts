export enum Compare {
  LESS_THAN = 'LESS_THAN',
  BIGGER_THEN = 'BIGGER_THEN',
}

export function defaultCompare<T = any>(a: T, b: T) {
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THEN;
}
