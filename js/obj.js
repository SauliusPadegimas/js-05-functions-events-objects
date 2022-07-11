// objetas tai yra {key: value} rinkinys
const user1 = {
firstName: 'Serbentautas',
age: 26,
town: 'Alytus',
email: 'serb@entautas.lt'
};

console.log('user1["firstName"] ===', user1['firstName']); 
console.log('user1 ===', user1);
console.log('user1.age ===', user1.age);
user1.age = 121;
console.log('user1 ===', user1);
console.log('user1.age ===', user1.age);

user1.firstName;

user1.country = 'Lietuva';
console.log('user1.country  ===', user1.country);