import { merge } from '../src/merge';

describe('merge', () => {
  it('test sort array', () => {
    const col1 = [9, 7, 5, 3];
    const col2 = [1, 4, 6];
    const col3 = [2, 8, 10];

    const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
