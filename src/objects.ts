//--------------------------------
//---------- OBJECTS -------------
//--------------------------------
let person: { name: string; age: number; isStudent: boolean;} = {
    name: "Alice",
    age: 22,
    isStudent: true
};
console.log("Person:", person);

//optional (?) properties
let car: { brand: string; model?: string } = { 
    brand: "Toyota"
};
console.log("Car:", car);

//readonly 
type Book = {
    readonly id: number; 
    title: string;
};
let myBook: Book = { id: 1, title: "TypeScript Basics"};
console.log("Book:", myBook);

//nested objects
let student: { 
    name: string;
    address: { city: string; country: string };
} = {
    name: "Bob",
    address: {
        city: "New York",
        country: "USA"
    }
};
console.log("Student:", student);