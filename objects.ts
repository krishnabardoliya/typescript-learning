// give object a type
let a: { prop1: string, prop2: string, prop3: number } = { prop1: "", prop2: "", prop3: 23 };

// passing objecct to function
function test(obj: { a: string, b: string, d: number }) {
    console.log(obj.a, obj.b, obj.c);
}



// ****************************************************************************************
// ********************************* IMPORTANT  ********************************* 

function test1(obj: { name: string, lastname: string, age: number }) {
    console.log(obj.name, obj.lastname, obj.age);
}


const testProp = {name:"a", lastname: "b", age: 1, isAlive: true}
test1(testProp); // it ignores isAlive
// test1({name:"a", lastname: "b", age: 1, isAlive: true}); //'d' does not exist in type 


// ****************************************************************************************  
// ****************************************************************************************  


// type alias

type Movie = {
    title: string,
    producer: string,
    director: string,
    budget: number,
}

const movie:Movie = {
    title: "Lorem Ipsum",
    producer: "abc",
    director: "xyz",
    budget: 3000000
}


// nested object


type carDetails = {
    yearOfPurchase: number,
    fuelType: string,
    average: number
}

type Car = {
    company: string,
    model: string,
    price: number,
    details: carDetails
}

const mycar: Car = {
    company: "Tata",
    model: "Nexon",
    price: 1500000,
    details: {
        yearOfPurchase: 2022,
        fuelType: "Petrol",
        average: 25
    }
}


// optional parameter
type Bike = {
    company: string,
    model: string,
    price: number,
    owner?: string
}

const mybike: Bike = {
    company: "Ola",
    model: "S1 pro",
    price: 100000
} 

// readonly modifier
type Dog = {
    name: string,
    readonly breed?: string,
    age: number,
}


const myDog: Dog = {
    name: "Lio",
    age: 1
}

console.log(myDog.breed);
// myDog.breed = "Beagle"; // not allow to change as its read only



// intersection type
type Circle = {
    radius: number
}

type Color = {
    color: string
}


type ColorfulCircle = Circle & Color;

const ball: ColorfulCircle = {
    radius: 20,
    color: "red"
};

type ColorfulCircle1 = Circle | Color;

const myCircle: ColorfulCircle1 = {
    color: "red"
};