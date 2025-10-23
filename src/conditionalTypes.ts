//-----------------------------
//------CONDITIONAL TYPES------
//-----------------------------

let age = 20; 
if(age>=18){
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//if-else-if ladder??
let score: number = 75;
if (score >= 90){
    console.log("Grade: A");
} else if(score >= 75){
    console.log("Grade: B"); 
} else if(score >=50){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//switch statement
let day: number = 3;
switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

//ternary operator
let isUser: boolean = true;
let welcomeMessage: string = isUser ? "Welcome back!" : "Welcome!";
console.log(welcomeMessage);