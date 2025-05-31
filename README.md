# Merge Sorted Collections (TypeScript)

This project merges three sorted integer arrays into a single sorted array in ascending order **without using any built-in sort functions**.

## 🧠 Logic

- `collection_1`: sorted descending (max → min) → reversed internally
- `collection_2` and `collection_3`: already sorted ascending (min → max)
- Merged using a multi-pointer approach without calling `.sort()`

## 📦 Setup

```bash
npm install
```

## 🔧 Build

```bash
npm run build
```

## 🧪 Run Tests

```bash
npm test
```

## 📁 Project Structure

```
src/
  merge.ts         # merge logic implementation
test/
  merge.spec.ts    # unit tests
```

## ✅ Example

```ts
const c1 = [9, 7, 5];       // descending
const c2 = [1, 3, 6];       // ascending
const c3 = [2, 4, 8];       // ascending

merge(c1, c2, c3); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## License

MIT
