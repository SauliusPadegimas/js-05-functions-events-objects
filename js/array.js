const u1 = 'James';
const u2 = 'Serbentautas';
const u3 = 'Bordiuras';

//  Array lietuviskai masyvas
//                0           1              2       3
const names = ['James', 'Serbentautas', 'Bordiuras', 8];
console.log('names ===', names);
console.log(names[3]);

// Skaiciu masyvas

let numbers = [1, 5, 9, 12];
console.log('numbers ===', numbers);
console.log(numbers[3]);

// ivairiu tipu masyvas

const mixed = [45, 'James', true, null, [5, 6]]
console.log('mixed ===', mixed);
console.log('mixed[4] ===', mixed[4]);
console.log('mixed[4][1] ===', mixed[4][1]);

const matrix = [
    [1, 2, 3, 4],   // i === 0
    [5, 6, 7, 8],   // i === 1
    [9, 10, 11, 12] // i === 3
]

console.log('matrix[1 + 1][2] ===', matrix[1 + 1][2]);

// colors
const colors = ['red', 'green', 'blue', 'violet', 'blue'];
for (let index = 0; index < 5; index++) {
    console.log(colors[index]);
}

// Array length

numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 521];
console.log('numbers ===', numbers);
console.log('numbers.length ===', numbers.length);

console.log('numbers[numbers.length-1] ===', numbers[numbers.length-1]);

// atspausdinti visus skaicius is bet kokio ilgio masyvo
for (let i = 0; i < numbers.length; i++) {
  console.log('  numbers[i] ===',   numbers[i]);
}