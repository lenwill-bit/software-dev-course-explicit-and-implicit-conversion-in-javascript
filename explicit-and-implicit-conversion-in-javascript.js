/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result); // I have found nothing wrong with this code but adding Number() makes it an exlicit conversion.

let isValid = Boolean(""); 
if (isValid) {
    console.log("This is valid!");   //by removeing the "false" I made the code actually see if there is a value or not. Before even though it was written as "false" it was conidered ture becuase there was text.
}

let age = "25";
let totalAge = Number(age) + 5;  
console.log("Total Age: " + totalAge); // adding Number() turns "25" into an actual number. before it was being read as text so the output just conbined 25 and 5 together. 

/*
  Part 2: Write Your Own Examples

Implicit

console.log("10" - 2);

Explicit

console.log(Number("42"));
*/