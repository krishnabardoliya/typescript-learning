"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_shops;
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.money = 100;
        _Person_shops.set(this, 1); // provate field only available inside the class
        this._products = 2; // _ means it is provate property but doesn't work as private propert just for indication for developer
    }
    // getter
    // it will trated as property but its not
    // more readable syntax than defining fucntion to get private properties.
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    get shops() {
        return __classPrivateFieldGet(this, _Person_shops, "f");
    }
    // setter
    // setter will be accessed as property of object
    // setter will be helpful when upating any provate property and it will be more readable and simple to understand
    set shops(newShop) {
        if (newShop < 0) {
            throw new Error("Shops must be positive values");
        }
        __classPrivateFieldSet(this, _Person_shops, newShop, "f");
    }
    // static method
    // group functionality with the class which nothing to do with instance
    // Use: most of the time used for createing new instance or helper to create multiple instances
    // by instance we can not access static properties or methods
    static createRandomPerson() {
        return new Person("dummy", "person");
    }
    greet() {
        console.log("Hello!!");
    }
    looseMoney() {
        this.money -= 10;
    }
    getShops() {
        return __classPrivateFieldGet(this, _Person_shops, "f");
    }
    updateShops() {
        __classPrivateFieldSet(this, _Person_shops, __classPrivateFieldGet(this, _Person_shops, "f") + __classPrivateFieldGet(this, _Person_shops, "f"), "f");
    }
    secret() {
        console.log("its private only accessible inside class");
    }
}
_Person_shops = new WeakMap();
// only accesible to class parameter not instance parameter
Person.description = "person who has shpops";
// extend class
class Distributor extends Person {
    constructor(fname, lname, area) {
        super(fname, lname);
        this.fname = fname;
        this.lname = lname;
        this.area = area;
    }
}
const distributor = new Distributor("Una", "Dean", "South");
console.log("distributor =>", distributor);
const person1 = new Person("Joe", "Kate");
const person2 = new Person("John", "Doe");
console.log(person1.money);
person1.looseMoney();
console.log("money => ", person1.money);
console.log("shops =>", person1.getShops());
person1.updateShops();
console.log("shops =>", person1.getShops());
console.log("fullName =>", person1.fullName);
console.log("shops =>", person1.shops);
person1.shops = 4;
console.log("shops =>", person1.shops);
// access static properties
console.log("Person.description =>", Person.description);
Person.description = "test";
console.log("Person.description =>", Person.description);
// access static method
const person3 = Person.createRandomPerson();
console.log("person3 =>", person3);
// Difference between JS class vs Typescript class
// 1) type strict 
// 2) readonly
// 3) public and privte modifiers only availble in ts 
// readonly is for changable or not public private is for accessible or not for visibility.
// public - availble to access inside and outside of the class
// private - only able to access inside the class #name and private modifiers both do same job, just declaring private than adding # is more readable and clearly understandable is the difference.
// can not use private #shops = 2 both "private" modifier and "#" can not be used together. 
