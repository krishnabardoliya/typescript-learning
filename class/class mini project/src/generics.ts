// - built in generics examples:

// const arr: Array<string> = ["apple","banana","mango"];
// const arr1: Array<number> = [1,24,5];


// const inputEle = document.querySelector<HTMLInputElement>("#username")!;
// inputEle.value = "Hacked";

// generic function

function identity<T>(item: T): T {
    return item;
}

console.log(identity(21));
console.log(identity("abc"));

interface Bike {
    name: string;
}

console.log(identity<Bike>({name: "asjdbgkajsd"}));


function getRandomElement<T>(element: Array<T>): T {
    return element[Math.floor(Math.random() * (element.length))];
}

console.log(getRandomElement<(string|boolean)>(['a', 'b', 'c', 'd', false]));


// multiple type generic

function merge<T,U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

let merged = merge({name: 'Cody'}, {hobbies: ['cooking', 'dancing']});
console.log('merged =>', merged);

// ****************************************************************************************
// ********************************* IMPORTANT  ********************************* 

// adding type constrain in above code
let anotherMerge = merge({name: 'Cody'}, 9);
console.log("anotherMerge =>", anotherMerge); // here spreadig {...9} will return empty object nad its not expected {}

// to avoid that we need to add type constrain on generic not as number string but as array/object/etc...

function newMerge<T extends object,U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

// let merge3 = newMerge({name: 'Cody'}, 9); // it will not allow 9 to be passed as parameter and will not spread




// ****************************************************************************************  
// ****************************************************************************************  

// extend interface

interface OnlyNumber {
    num: number
}

function printTwice<T extends OnlyNumber>(thing:T): number {
    return thing.num;
}

console.log(printTwice({num: 10}))


// default type

function makeEmptyArray<T> (): T[] {
    return []
};

const myArray = makeEmptyArray() // default as unknon type



function makeEmptyArray1<T = number> (): T[] {
    return []
};

const myArray1 = makeEmptyArray1() // default type is number
const myArray2 = makeEmptyArray1<boolean>() // default type is boolean


// generic class
class PlayList<T> {
    public list:T[] = [];
    add(el: T) {
        this.list.push(el)
    }
}

interface Audio {
    title: string;
    creator: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: number
}

const myAudioPlayList = new PlayList<Audio>();
myAudioPlayList.add({title: 'Lover', creator: "Tailor Swift"});
const myVideoPlayList = new PlayList<Video>();
myVideoPlayList.add({title: 'Lover', creator: "Tailor Swift", resolution: 1080});

