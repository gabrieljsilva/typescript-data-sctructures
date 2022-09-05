export interface Iterator<K = any> {
  next: () => K | undefined;
  hasNext: () => boolean;
}
