// ******** typeof guards ********

function triple(value: number|string) {
    if(typeof value === "number") {
        return value * 3;
    } else {
        return value.repeat(3);
    }
}

// **************** truthiness guard => to check true or false and eleminate null or undefined possibilities

const b = document.getElementById("newElement");
if(b) {
    console.log(b); // here b is always element and not undefined as truthiness guard is applied
}


const printLetters = (word: string|null) => {
    if(!word) {
        console.log("Word is not provided");
    } else {
        for(let char of word) {
            console.log('char =>', char);
        }
    }
}

printLetters("Happy birthday!");
printLetters("");

// **************** Equality narrowing

function demo(x: string|number, y: string|boolean) {
    if(x===y){
        console.log(x.toUpperCase());
    }
}

demo(1,"4");
demo("a","a");


// **************** narrowing type with "in" operator

interface Movie {
    name: string,
    runTime: number
}

interface TVShow {
    name: string,
    runTime: number,
    episodes: number
}

function getRunTime(media: TVShow | Movie) {
    if("episodes" in media) {
        console.log(media, "is TV Show");
        console.log("runTime => ",media.runTime * media.episodes, "m");
    } else{
        console.log("runTime => ",media.runTime, "m");
    }
}

getRunTime({name: "Demo", episodes: 10, runTime: 30})
getRunTime({name: "Demo2", runTime: 30})



class Employee {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: Employee | Company) {
    if("name" in entity) {
        console.log(entity.name);
    } else {
        console.log(entity.username);
    }
}


// **************** instanceOf narrowing

function printFullDate(date: Date|string) {
    if(date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString())
    }
}

printFullDate(new Date());
printFullDate("16 Jul 2024")

class Employee1 {
    constructor(public name: string) {}
}

class Company1 {
    constructor(public name: string) {}
}

function printName1(entity: Employee1 | Company1) {
    if(entity instanceof Employee1) {
        console.log(entity.name);
    } else {
        console.log(entity.name);
    }
}


// **************** type predicates return type "animal is Cat1"


interface Cat1 {
    name: string;
    numLives: number
}

interface Dog1 {
    name: string;
    breed: string;
}
function isCat1(animal: Cat1|Dog1) : animal is Cat1 {
    return (animal as Cat1).numLives !== undefined;
}

function makeNoice(animal : Cat1|Dog1) {
    if(isCat1(animal)){
        console.log(animal, "meow!")
    } else {
        console.log(animal, "woof!")
    }
}


// **************** discriminated unions => condition based on comman accorss diff types

interface Rooster {
    name: string,
    age: number,
    kind: "rooster"
}

interface Cow {
    name: string,
    breed: string,
    kind: "cow"
}

interface pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig"
}

type FarmAnimals = Rooster | Cow | pig;

function getFarmAnimalSound(animal:FarmAnimals) {
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

const myCow: Cow = {
    name: "Sita",
    breed: "Geer",
    kind: "cow"
}

getFarmAnimalSound(myCow);

// **************** Exhaustiveness checks with never

interface Sheep {
    name: string;
    age: string;
    kind: "sheep"
}

function getNewFarmAnimalSound(animal:FarmAnimals | Sheep) {
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


