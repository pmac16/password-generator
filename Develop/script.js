//Arrays

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "$", "&", "."];

var complexity = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//function to start password generator
function generatePassword() {

  //password complexity 
  var complexity = prompt("How many characters would you like your password to be? Choose between 10 and 128 characters.");

  while (complexity <=10 || complexity >=128) {
    window.alert("Password length must be between 10 and 128 characters. Please try again.");
    var complexity = prompt("How many characters would you like your password to be?");
  }

  var confirmSpecialCharacter = confirm("Click OK to include special characters in your password.");

  
  var confirmNumericCharacter = confirm("Click OK to include numbers in your password.");
  var 


}

//prompt if how many characters between 10 and 128

//click ok to confirm including special characters

//numeric characters

//lower case

//uppercase



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
