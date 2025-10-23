//-----ENUMS-----

//enums with default values
enum Direction { 
    Up, //0
    Down, //1
    Left, //2
    Right //3
}

console.log("Enum Up:", Direction.Up);
console.log("Enum Left:", Direction.Left);

//enums with custom values
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log("Success Code:", Status.Success)
console.log("Not Found Code:", Status.NotFound)
console.log("Server Error Code:", Status.ServerError)