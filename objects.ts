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