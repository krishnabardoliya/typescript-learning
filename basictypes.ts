
// type: number
let numberTypevar:number = 1.12;



// type: string
let stringTypevar:string = "abc";
stringTypevar.toUpperCase();



// type: boolean
let booleanTypevar:boolean = false;



// type: any
// allows being assigned to other type variable
// allows calling any method
let anyTypeVar: any = "test";
anyTypeVar = 1.2;
let var1: string = anyTypeVar;
anyTypeVar.toUpperCase();




// type: unknown
// doesn't allow being assigned to other typed variable
// doesn't allow calling any method
let unknownTypeVar: unknown
unknownTypeVar = 1
unknownTypeVar = false;
unknownTypeVar = undefined;
unknownTypeVar = "some string";
// unknownTypeVar.toUpperCase(); // calling any method not allowed for unknown type variable
// let var2: string = unknownTypeVar; // Type 'unknown' is not assignable to any typed variable



// type void
let voidTypeVar:void;
// voidTypeVar = null; // not allowed
voidTypeVar = undefined;



// type never
let neverTypeVar: never
// neverTypeVar = undefined // not allowed
// console.log(neverTypeVar); // not allowed in typescript "Variable 'c' is used before being assigned.(2454)"



// not defining type
let notTypeDefinedVar = "abc";
// notTypeDefinedVar = 2; // not allowed take type which is first assined to it.
notTypeDefinedVar = "something else"
