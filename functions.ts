// type for funtion
function voidReturnTypeFunction(param1: string): void {
    console.log(param1);
    // returns nothing
}


// type for funtion
function voidReturnTypeFunction1(param1: string): void {
    console.log(param1);
    return undefined;
}


// type for funtion
function undefinedReturnTypeFunction(param1: string): undefined {
    console.log(param1);
    return undefined;
}


// default parameter
function defaultparameterFunction(param1: string = "abc"): string {
    return param1;
}

defaultparameterFunction(); 
defaultparameterFunction("xyz"); 



// of variable type is function then void can return any values
const v = () => {
    return  1;
}

const d: () => void = v;
// const f: () => undefined = v;  // Type '() => string' is not assignable to type '() => undefined'.


const numbers = [1,2,3];
numbers.forEach(element => {
    // element.toUppercase(); // automatically assign element type number without defining it
});


// never
function neverTypeFunction():never {
    throw(new Error("error"));
}

function neverTypeFunction1():never {
    while(true) {
        // this function never return anything
    }
}