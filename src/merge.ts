import { Merge } from './interfaces/merge.interface';

const mergeMinToMax = (num: number[], num2: number[]): number[] => {

  const result: number[] = [];

  let i = 0, j = 0;

  while (i < num.length && j < num2.length) {

    if (num[i] <= num2[j]) {
      result.push(num[i++]);
    } else {
      result.push(num2[j++]);
    }

  }

  while (i < num.length) {
    result.push(num[i++]);
  }
  while (j < num2.length) {
    result.push(num2[j++]);
  }

  return result;
};

const mergeMaxToMin = (num: number[]): number[] => {
  const result: number[] = [];
  for (let i = num.length - 1; i >= 0; i--) {
    result.push(num[i]);
  }
  return result;
};

export const merge: Merge = (collection_1, collection_2, collection_3) => {
  const sortMaxToMin = mergeMaxToMin(collection_1);
  const firstMerge = mergeMinToMax(sortMaxToMin, collection_2);
  const lastMerge = mergeMinToMax(firstMerge, collection_3);
  return lastMerge;
};
