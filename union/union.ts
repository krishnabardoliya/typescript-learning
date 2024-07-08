// define two types
let union: string|number = 1;
union = "1";


let arrunion:(string| number)[] = [];
arrunion.push(2);
arrunion.push("2");
// arrunion.push(true) // should be string or number


let onlyTypeUnion: string[]|number[] = []
onlyTypeUnion = [1,2,3];
onlyTypeUnion = ["1","2",""]
// onlyTypeUnion = [1,2,"3"] // can not accept both number and strinf in one array

// union on custom types
type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

const myLocation: Point | Loc = {lat: 12, long: 34};
let locations:(Point|Loc)[] = [];
locations.push({x: 12, y:34});
locations.push({lat: 34, long: 56});





