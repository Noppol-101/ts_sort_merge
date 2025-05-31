# Merge Sorted Collections (TypeScript)


## Logic

- `collection_1`: max → min
- `collection_2` and `collection_3`: min → max

## Setup

```bash
npm install
```

## Start

```bash
npm run start
```

## Build

```bash
npm run build
```

## Run Tests

```bash
npm test
```

## Project Structure

```
src/
  merge.ts         # logic
  main.ts          # main
test/
  merge.spec.ts    # unit tests
```

## ✅ Example

```ts
const c1 = [9, 7, 5];       // Max to min
const c2 = [1, 3, 6];       // Min to max
const c3 = [2, 4, 8];       // Min to max

merge(c1, c2, c3); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
