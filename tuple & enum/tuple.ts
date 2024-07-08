// tuple means strict type & fix length array
type Tuple = [number, number]
const tuple: Tuple = [1,2];



// difference between tuples and union array is tuple has strict type and length while union array is strict on type but nnot on length
const unionArray: (string|number)[] = [1,2,3,4,"1","2","3",1,3,4];
let myTuple: [string, number] = ["1", 2];


// ****************************************************************************************
// ********************************* IMPORTANT  ********************************* 

myTuple = ["3", 4];
myTuple.push(4)
myTuple.push("3")
myTuple.push("3")
myTuple.pop()
myTuple.pop()
myTuple.slice(1,1);


// will not work

// myTuple.join([3,"4"]);
// delete myTuple[1];


// below examples works as these array operation not make any changes to existing array but return new value

myTuple.flat()
myTuple.toString() 
myTuple.splice(1,1); // return removed elements

// ****************************************************************************************  
// **************************************************************************************** 