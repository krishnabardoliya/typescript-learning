


// ****************************************************************************************
// ********************************* IMPORTANT  ********************************* 

// here button type automatic can be HTMLElement | null
const btn = document.getElementById("btn");

// here button type automatic will be HTMLElement only ! will gurrenty that it will find html element will not be null
// it can be risky to use
const btn1 = document.getElementById("btn")!;


// ****************************************************************************************
// ****************************************************************** 

// explicitly define the type
const someValue: unknown = "Hello world";

// console.log(someValue.length) //shoe an error can't do length on unknown type

console.log((someValue as string).length); // this will not change type of someValue to string but for this portion will treated as string

const buttonElement = document.getElementById("btn")! as HTMLButtonElement;
const inputElement = document.getElementById("todoInput")! as HTMLInputElement;



