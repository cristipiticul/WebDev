// // Functia care transforma din mile in km
// var miles1 = 20;
// var miles2 = 30;
// var miles = [10, 20, 30, 40, 50, 60];

// // var km1 = 1.609344 * miles1;
// // console.log(km1);

// // var km2 = 1.609344 * miles2;
// // console.log(km2);

// function afiseazaKm(x) {
//     var km = 1.609344 * x;
//     console.log(km);
// }

// afiseazaKm(miles1);
// afiseazaKm(miles2);

// for(i = 0; i < miles.length; i++) {
//     afiseazaKm(miles[i]);
// }

// function sayHello(name) {
//     if (name) {
//         console.log('Hello ' + name);
//     } else {
//         console.log('Hey there');
//     }
// }
// sayHello('militaru maria');
// sayHello();

// function fullName(firstName, lastName) {
//     console.log( firstName + ' ' + lastName);
// }
// fullName('Bruce', 'Wayne');

// // arguments are previously-defined vars
// var fName = 'Bruce';
// var lName = 'Wayne';
// fullName(fName, lName);

// function sum(a, b) {
//     console.log(a+b);
//     a = 0;
//     console.log(a); // 0
// }

// var a = 2, b = 3;
// sum(a, b); // 5, 0
// console.log(a);

// function sum(a, b) {
//     a = 0;
//     return a + b;
// }

// // console.log(5)
// // combining function calls with expressions
// var age = sum(10, 10) + sum(2, 3); // 25
// console.log(age);

var a = 8; // variabila globala
function incercare(y) {
    var x = 7;
    a = 3;
    console.log(x);
    console.log(y);
}

incercare(5);

console.log(a);
console.log(x);
console.log(y);