//-------------------------
//------ UNION TYPES ------
//-------------------------

//variables
let userId: string | number;
userId = 101;
console.log("User ID (number):", userId);

userId = "A101";
console.log("User ID (string):", userId);

//functions
function printStatus(status: "success" | "error" | "loading"){
    console.log("Print status:", status);
}
printStatus("success");
printStatus("loading");
// printStatus("completed"); //--->Error

//arrays
let mixedArray: (string|number)[]= [1, "two", 3, "four"];
console.log("Mixed array:", mixedArray);

//type narrowing?
function showLength(value: string|number){
    if (typeof value === "string"){
        console.log("String length:", value.length);
    } else {
        console.log("Number doubled:", value * 2);
    }
}

showLength("Typescript");
showLength(25);