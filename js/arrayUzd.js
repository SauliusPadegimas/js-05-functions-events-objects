
const pav = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
const pglb = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];

const space = pglb[7];
// atspausdinti is 
// 1. my sistes is in the lake
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
//  5. is pav masyvo istraukti 'hammer', 'sun', 'table' ir išsaugoti naujam masyve nekeičiant originalo
// 6. i pav masvyo gala ideti 'snikers'

// 1.
const lake = pglb[3] + pglb[7] + pav[1] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + space + pav[6];
console.log('lake ===', lake);


// 5.
const istrauka = pav.slice(2, 5);
console.log('istrauka ===', istrauka);
console.log('pav ===', pav);


// 6.
pav.push('snickers');
console.log('pav ===', pav);