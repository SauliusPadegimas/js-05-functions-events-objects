'use strict';
// masyvu metodai

const colors = ['green', 'blue', 'red']
console.log('originalas ===', colors);

// array.push() - prideti reiksme i masyvo gala (modifikuojantis originala)

const pushResult = colors.push('violet');
console.log('pushResult ===', pushResult);
console.log('colors po push ===', colors);

// array.unshift('nauja reiksme') - prideti reiksme i prieki (modifikuojantis originalą)

const unshiftResult = colors.unshift('white');
console.log('unshiftResult ===', unshiftResult);
console.log('colors po unshift ===', colors);

// array.shift() - nuim pirmą reikšmę nuo priekio (modifikuojantis originalą)

// const shiftResult = colors.shift();
// console.log('shiftResult ===', shiftResult);
// console.log('colors po shift ===', colors);

// array.pop() - nutrinam paskutini elementa (modifikuojantis originalą)

// const popResult = colors.pop();
// console.log('popResult ===', popResult);
// console.log('colors po pop ===', colors);

// array.slice(start, finish) - nemodifikuoja originalo
const sliceResult = colors.slice(-2)
console.log('sliceResult ===', sliceResult);
console.log('colors po slice ===', colors);
console.log('typeof colors ===', typeof colors);
console.log('Ar tai yra masyvas ===', Array.isArray(colors));
