// class Student {
//     constructor(fn, ln, bd) {
//         this.firstName = fn;
//         this.lastName = ln;
//         this.birthDate = bd;
//         this.fuel = 0;
//     }
//     walk() {
//         // console.log(this);
//         console.log(`${this.lastName} is walking`);
//         // console.log(this.firstName + " is walking");
//     }
// }
// var student1 = new Student("Cristi", "Militaru", "25.10.1994");
// student1.walk();
// var student2 = new Student("James", "Arthur", "02.03.1988");
// student2.walk();

class Car {
    constructor(mk, md) {
        this.make = mk;
        this.model = md;
        this.speed = 0;
        this.fuel = 0;
    }
}