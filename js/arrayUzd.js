
const pav = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
const pglb = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];

const space = pglb[7];
// atspausdinti is 
// 1. my sistes is in the lake
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister

// 1.
const lake = pglb[3] + pglb[7] + pav[1] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + space + pav[6];
console.log('lake ===', lake);