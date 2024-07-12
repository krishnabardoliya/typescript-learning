// example of class with

// 1) constructor
// 2) class fields
// 3) getter and setter
// 4) provate # fields
// 5) static fields/methods
// 6) inheritance
// 7) super()


class person {
    money = 100;
    shops = 1;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hello!!")
    }
    looseMoney() {
        this.money -= 10;
    }
}

const person1 = Person("Joe", "Kate");
const person2 = Person("John", "Doe");
console.log(person1.money);
person1.looseMoney();
console.log(person1.money);
