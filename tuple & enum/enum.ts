// Enums are set of constant with number or string 


// enum with default values
enum Arrow {
    UP, // 0
    DOWN, //1
    LEFT, //2
    RIGHT //3
}
console.log(Arrow.UP) // 0



// custom constant values
enum direction {
    north = "go up",
    east = "go right",
    south = "go down",
    west = "go left",
}

console.log(direction.north) // go up

// enum answer {
//     TRUE = true, // don't work as enum can't be boolean value
//     FALSE = null // don't work as enum can't be null value
//     FALSE = undefined // don't work as enum can't be undefined value
// }


