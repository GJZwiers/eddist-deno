# eddist-deno
Edit distance calculator for the Deno runtime. The edit distance is the minimum number of changes needed to change string A into string B.

## Usage
As an example, to change the word `kitten` to `sitting` the following steps are needed:
- (sub k to s): sitten
- (sub e to i): sittin
- (add g): sitting

2 substitutions and 1 addition make the edit distance 2 + 1 = 3.

```typescript
const dist = eddist('kitten', 'sitting');
console.log(dist);  // logs 3
```
