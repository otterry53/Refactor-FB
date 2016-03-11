/*when document is ready
ask the user for input of a number
take the number and check it to see if it is a number
if it isn't, prompt the user to enter a whole number again
if it is, play the fizzbuzz game with the user's number
start the counter until it is less than or equal to the user's number
if the counter number is divisible by 15, append "FizzBuzz" to the body
if the counter number is divisible by 3, append "Fizz" to the body
if the counter number is divisible by 5, append "Buzz" to the body
if none of the above, append the counter number to the body*/

//Step one - Function Definitions

//function to see if number is valid
function checkNumber(yourNumber) {
if (Math.floor(yourNumber) != yourNumber) {
prompt("Invalid. You must enter a whole number!");
} else {
playGame(yourNumber);
}
}

//function run fizz buzz function
function playGame(yourNumber) {
for (var counter = 1; counter <= yourNumber; counter++) {
if (counter % 15 === 0) {
$('body').append("<p>FizzBuzz</p>");
} else if (counter % 3 === 0) {
$('body').append("<p>Fizz</p>");
} else if (counter % 5 === 0) {
$('body').append("<p>Buzz</p>");
} else {
$('body').append("<p>" + counter + "</p>");
}
}
}
//Step 2 Function Usage
$(document).ready(function () {
var yourNumber = prompt("Please pick a whole number.");
checkNumber(yourNumber);
});
