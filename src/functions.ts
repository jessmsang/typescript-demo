//-----------------------------
//--------- FUNCTIONS ---------
//-----------------------------

//string
function greet(name:string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

//number
function add(a:number, b:number): number {
    return a + b;
}
console.log("Sum:", add(10, 20))

//optional parameters
function introduce(name: string, age?:number): string {
    if(age !== undefined){
        return `${name} is ${age} years old.`
    }
    return `${name} chose not to share their age.`
}
console.log(introduce("Bob", 25));
console.log(introduce("Charlie"));

//default parameters
function multiply(a: number, b: number = 2): number {
return a * b;
}
console.log("Multiply with default:", multiply(5));
console.log("Multiply custom:", multiply(5, 4));

//arrow functions
const square = (x: number): number => x * x;
console.log("Square:", square(6));

//---------------------------------------------
//----------function type annotations----------
//---------------------------------------------

let operation: (x: number, y: number) => number;

//assigning the 'add' function (defined above)
operation = add;
console.log("Operation (Add):", operation(15, 25));

//assigning the 'multiply' function (defined above)
operation = multiply;
console.log("Operation (Multiply):", operation(3, 7));

//assigning an inline arrow function
operation = (x,y) => x - y;
console.log("Operation (Subtract):", operation(10, 4));