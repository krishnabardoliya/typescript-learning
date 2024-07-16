"use strict";
// - built in generics examples:
// const arr: Array<string> = ["apple","banana","mango"];
// const arr1: Array<number> = [1,24,5];
// const inputEle = document.querySelector<HTMLInputElement>("#username")!;
// inputEle.value = "Hacked";
// generic function
function identity(item) {
    return item;
}
console.log(identity(21));
console.log(identity("abc"));
console.log(identity({ name: "asjdbgkajsd" }));
function getRandomElement(element) {
    return element[Math.floor(Math.random() * (element.length))];
}
console.log(getRandomElement(['a', 'b', 'c', 'd', false]));
// multiple type generic
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
let merged = merge({ name: 'Cody' }, { hobbies: ['cooking', 'dancing'] });
console.log('merged =>', merged);
// ****************************************************************************************
// ********************************* IMPORTANT  ********************************* 
// adding type constrain in above code
let anotherMerge = merge({ name: 'Cody' }, 9);
console.log("anotherMerge =>", anotherMerge); // here spreadig {...9} will return empty object nad its not expected {}
// to avoid that we need to add type constrain on generic not as number string but as array/object/etc...
function newMerge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
function printTwice(thing) {
    return thing.num;
}
console.log(printTwice({ num: 10 }));
// default type
function makeEmptyArray() {
    return [];
}
;
const myArray = makeEmptyArray(); // default as unknon type
function makeEmptyArray1() {
    return [];
}
;
const myArray1 = makeEmptyArray1(); // default type is number
const myArray2 = makeEmptyArray1(); // default type is boolean
// generic class
class PlayList {
    constructor() {
        this.list = [];
    }
    add(el) {
        this.list.push(el);
    }
}
const myAudioPlayList = new PlayList();
myAudioPlayList.add({ title: 'Lover', creator: "Tailor Swift" });
const myVideoPlayList = new PlayList();
myVideoPlayList.add({ title: 'Lover', creator: "Tailor Swift", resolution: 1080 });
