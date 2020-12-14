//Arrays

var numericValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "$", "&", "."];

var characterLength= "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var numberConfirms = 0; 
var whatConfirmed= [];
var nextCharacter; // used to store the value of the next character generated for the paassword
var i;

//function to start password generator
writePassword();

function generatePassword() {

  var determinedPassword = "";

  // Ask character length
  var characterLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128 characters."));

  while (characterLength <8 || characterLength >128) {
    window.alert("Password length must be between 8 and 128 characters. Please try again.");
    var characterLength = parseInt(prompt("How many characters would you like your password to be?"));
  }

  // Track the number of confirmations in numberConfirms
  // Track which confiramtion in an array called whatConfirmed so we can determine what type each character in the password is going to be  

  //Confirm special characters 
  var confirmSpecialCharacter = confirm("Click OK to include special characters in your password.");

  if (confirmSpecialCharacter) {
    numberConfirms ++;
    whatConfirmed[numberConfirms]= "Special"
  }

  //Confirm numbers 
  var confirmNumericCharacter = confirm("Click OK to include numbers in your password.");

  if (confirmNumericCharacter) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Numeric"

  }

  //confirm lowercase letters
  var confirmLowerCase = confirm("Click OK to include lower case letters in your password.");
  if (confirmLowerCase) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Lowercase";
  }

  //confirm uppercase letters
  var confirmUpperCase = confirm("Click OK to include upper case letters in your password.");
  if (confirmUpperCase) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Uppercase";
  }

  //Determie what type is the nth character in the password 
  for (i = 1; i<= characterLength; i++){

   var answer=  whatConfirmed[Math.floor(Math.random()*numberConfirms)+1]
  
   switch (answer){
     case 'Numeric' :
       nextCharacter=numericCharacter();
       break;
     case 'Uppercase':
       nextCharacter=upperCase();
       break;
     case 'Lowercase':
       nextCharacter=lowerCase();
       break;
     case 'Special':
       nextCharacter=specCharacters();
       break;
   }
    
       determinedPassword += nextCharacter;
      
  }
 return(determinedPassword);

}


function lowerCase() {
    // randomly choose a lower case character
    return(alphaLower[Math.floor(Math.random() * 25)]);
}

function upperCase() {
    // randomly choose an upper case character
    return (alphaUpper[Math.floor(Math.random()*25)]);
}

function numericCharacter() {
    //randomly choose a number
    return (numericValues[Math.floor(Math.random() * 9)]);
}

function specCharacters() {
    //randomly choose a special character
    return (specialCharacters[Math.floor(Math.random() * 3)]);
}


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