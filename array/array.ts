// empty array type
const arr: [] = [];

//type we can define array type
const way1: string[] = [];
const way2: Array<string> = [];

// by default type never
const arr1 = []
// arr1.push(10); not possible with never type


const arr2 = [1]
// arr2.push("2"); // not possible aws initialised with number takes type as: number[]


const arr3 = [1, "1"]
// arr3.push(true) // not possible takes (string | number)[]


// of type any
const arr4: any[] = []
arr4.push(1, "2", true, undefined, null, 0)


// custom type in array
type Person = {
    name: string,
    age: number
};

const person: Person[] = [{ name: "Krishna", age: 27 }, { name: "Joe", age: 28 }];

//multidimentional array

const ticTacToe: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];


const myCustomArray: string[][][] = [
    [
        ["1", "1"],
        ["1"],
        ["1", "1"]
    ],
    [
        ["1"],
        ["1"]
    ],
    [
        ["1", "1"],
        ["1"],
        ["1", "1"],
    ],
    [
        ["1"], ["1"], ["1"], ["1"]
    ]
];








