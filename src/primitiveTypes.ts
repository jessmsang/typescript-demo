//------------------------------
//------ PRIMITIVE TYPES -------
//------------------------------

//number type
let age: number = 26;
console.log("Age:", age);

//string type
let firstName: string = "Jess";
console.log("Name:", firstName);

//boolean type
let isStudent: boolean = false;
console.log("Is Student?", isStudent);

//null type - used to indicate that a variable holds nothing by design
let emptyValue: null = null;
console.log("Empty Value:", emptyValue);

//undefined type - means that a variable has been declared but not yet given a value
let notAssigned: undefined = undefined;
console.log("Not Assigned:", notAssigned);

//symbol type - used to create unique identifiers
let uniqueId1: symbol = Symbol("id");
let uniqueId2: symbol = Symbol("id");
console.log("Are symbols equal?", uniqueId1 === uniqueId2);

//bigint type - represents very large integers that go beyond JS' safe integer limit
//bigints are especially useful when working with large IDs, cryptography, or financial calculations where precision matters
let bigNumber: bigint = 9007199254740991n;
console.log("Big number:", bigNumber);