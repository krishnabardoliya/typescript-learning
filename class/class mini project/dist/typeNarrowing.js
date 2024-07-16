"use strict";
// ******** typeof guards ********
function triple(value) {
    if (typeof value === "number") {
        return value * 3;
    }
    else {
        return value.repeat(3);
    }
}
// **************** truthiness guard => to check true or false and eleminate null or undefined possibilities
const b = document.getElementById("newElement");
if (b) {
    console.log(b); // here b is always element and not undefined as truthiness guard is applied
}
const printLetters = (word) => {
    if (!word) {
        console.log("Word is not provided");
    }
    else {
        for (let char of word) {
            console.log('char =>', char);
        }
    }
};
printLetters("Happy birthday!");
printLetters("");
// **************** Equality narrowing
function demo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}
demo(1, "4");
demo("a", "a");
function getRunTime(media) {
    if ("episodes" in media) {
        console.log(media, "is TV Show");
        console.log("runTime => ", media.runTime * media.episodes, "m");
    }
    else {
        console.log("runTime => ", media.runTime, "m");
    }
}
getRunTime({ name: "Demo", episodes: 10, runTime: 30 });
getRunTime({ name: "Demo2", runTime: 30 });
class Employee {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if ("name" in entity) {
        console.log(entity.name);
    }
    else {
        console.log(entity.username);
    }
}
// **************** instanceOf narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
printFullDate(new Date());
printFullDate("16 Jul 2024");
class Employee1 {
    constructor(name) {
        this.name = name;
    }
}
class Company1 {
    constructor(name) {
        this.name = name;
    }
}
function printName1(entity) {
    if (entity instanceof Employee1) {
        console.log(entity.name);
    }
    else {
        console.log(entity.name);
    }
}
function isCat1(animal) {
    return animal.numLives !== undefined;
}
function makeNoice(animal) {
    if (isCat1(animal)) {
        console.log(animal, "meow!");
    }
    else {
        console.log(animal, "woof!");
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "rooster":
            console.log("I am Rooster Cockadooledoo!");
            break;
        case "cow":
            console.log("I am Cow Mooo!");
            break;
        case "pig":
            console.log("I am Cow Oink!");
            break;
        default:
            break;
    }
}
const myCow = {
    name: "Sita",
    breed: "Geer",
    kind: "cow"
};
getFarmAnimalSound(myCow);
function getNewFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "rooster":
            console.log("I am Rooster Cockadooledoo!");
            break;
        case "cow":
            console.log("I am Cow Mooo!");
            break;
        case "pig":
            console.log("I am Cow Oink!");
            break;
        default:
            // const exhaustiveCheck: never = animal // it will throw error here as its not handled in switch case
            // return exhaustiveCheck;
            break;
    }
}
