class Person {
    money = 100;
    #shops = 1; // provate field only available inside the class
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
    getShops() {
        return this.#shops;
    }
    updateShops() {
        this.#shops += this.#shops;
    }
    #secret() {
        console.log("its private only accessible inside class");
    }
}

const person1 = new Person("Joe", "Kate");
const person2 = new Person("John", "Doe");
console.log(person1.money);
person1.looseMoney();
console.log("money => ",person1.money);
console.log("shops =>", person1.getShops());
person1.updateShops();
console.log("shops =>", person1.getShops());
