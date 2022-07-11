console.log('functions');
// funkcijos aprasymas
function greet(user) {
    //function body
    console.log('Hello',user);    
}

/*
function deklaruojam funkcija.
greet = f-jos pavadinimas.
() = argumentams.
user= argumentas.
{} = tai kas bus vykdoma iskvietus funkcija.
return = direktyva naudojama grazinti reiksme ir nutraukto f-jos vykdyma.
*/


// funkcijos iskvietimas
greet('linas');
greet('aloyzas');

// const user2 = {
//     firstName: 'Serbentautas',
//     // metodas
//     greet: function () {
//         console.log('Hello world user1');
//     }
//     };

// user2.greet();


// function addNumsArr(arr) {
//     console.log(arr[0] + arr[1]);
// }
// addNumsArr([2, 9])

function addNums(n1, n2) {
    const sum = n1 + n2;
    console.log(`jei ${n1} sudesim su ${n2} tai gausis ${sum}`);
    return sum;
}

const sum1 = addNums(12.3,-43);
const sum2 = addNums(53,-4.3);
console.log('sum1 ===', sum1);
console.log('sum2 ===', sum2);
addNums(sum1, sum2);

