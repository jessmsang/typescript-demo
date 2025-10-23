//-----TUPLES-----
let user: [number, string, boolean];
user = [1, "Alice", true];
console.log("User Tuple:", user);

console.log("User Name:", user[1])
console.log("Is Active:", user[2])

let employee: [number, string, string?]; //make an optional element using ?
employee = [101, "Bob"];
console.log("Employee Tuple:", employee);