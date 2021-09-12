> This Deno module is DEPRECATED. It was made an an experiment and there are better, much faster implementations of this algorithm available. 

# eddist-deno
String edit distance calculation module for Deno. The edit distance is the minimum number of changes needed to turn string A into string B.

This module is functional but basic, it does not provide memory optimizations (yet).

## Usage
As an example, to change the word `kitten` to `sitting` the following steps are needed:
- (sub k to s): sitten
- (sub e to i): sittin
- (add g): sitting

2 substitutions and 1 addition make the edit distance 2 + 1 = 3.

```typescript
import { eddist } from "https://deno.land/x/eddist/mod.ts"

const dist = eddist('kitten', 'sitting');
console.log(dist); // logs 3
```
