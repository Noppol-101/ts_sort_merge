import { merge } from './merge';

const collection1 = [9, 7, 5, 3, 1]; 
const collection2 = [8, 6, 10];
const collection3 = [2, 4];

const result = merge(collection1, collection2, collection3);

console.log('Result:', result);
