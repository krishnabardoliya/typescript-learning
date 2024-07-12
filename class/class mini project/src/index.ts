class Person {
    // only accesible to class parameter not instance parameter
    static description = "person who has shpops";
    money: number = 100;
    #shops: number = 1; // provate field only available inside the class
    _products: number = 2; // _ means it is provate property but doesn't work as private propert just for indication for developer
    constructor(public readonly firstname: string, public lastname: string) {
    }
    // getter
    // it will trated as property but its not
    // more readable syntax than defining fucntion to get private properties.
    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }
    get shops() {
        return this.#shops;
    }
    // setter
    // setter will be accessed as property of object
    // setter will be helpful when upating any provate property and it will be more readable and simple to understand
    set shops(newShop) {
        if(newShop < 0) {
            throw new Error("Shops must be positive values")
        }
        this.#shops = newShop;
    }

    // static method
    // group functionality with the class which nothing to do with instance
    // Use: most of the time used for createing new instance or helper to create multiple instances
    // by instance we can not access static properties or methods
    static createRandomPerson() {
        return new Person("dummy", "person")
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
    private secret(): void {
        console.log("its private only accessible inside class");
    }
}


// extend class
class Distributor extends Person {
    constructor(public fname:string, public lname: string, public area: string) {
        super(fname,lname);
    }
} 

const distributor = new Distributor("Una","Dean","South");
console.log("distributor =>", distributor)

const person1 = new Person("Joe", "Kate");
const person2 = new Person("John", "Doe");
console.log(person1.money);
person1.looseMoney();
console.log("money => ",person1.money);
console.log("shops =>", person1.getShops());
person1.updateShops();
console.log("shops =>", person1.getShops());
console.log("fullName =>", person1.fullName);
console.log("shops =>",person1.shops);
person1.shops = 4;
console.log("shops =>",person1.shops);

// access static properties
console.log("Person.description =>",Person.description);
Person.description = "test";
console.log("Person.description =>",Person.description);

// access static method
const person3 = Person.createRandomPerson();
console.log("person3 =>", person3);
