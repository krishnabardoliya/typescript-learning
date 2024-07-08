// literal means defining static values as type

type onlyZero = 0 | "zero" | "";

let zero: onlyZero = 0;
zero = "zero";
zero = ""
// zero = 1 // not work as it not in type