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
var determinedPassword;
var numberConfirms;
var whatConfirmed= [];
var nextCharacter; // used to store the value of teh next charatceter generated for teh paassword
var i;

determinedPassword="";
numberConfirms = 0;
//function to start password generator
generatePassword();

function generatePassword() {

  //password complexity 


  var characterLength = parseInt(prompt("How many characters would you like your password to be? Choose between 10 and 128 characters."));
  


  while (characterLength <10 || characterLength >128) {
    window.alert("Password length must be between 10 and 128 characters. Please try again.");
    var characterLength = parseInt(prompt("How many characters would you like your password to be?"));
  }

  //
  var confirmSpecialCharacter = confirm("Click OK to include special characters in your password.");

  // now let us keep tr5ack of te number of confirmations in a variable nuimberConfirms
  // and also let us keep tracj which confirmation in an array whatConfirmed 
  // the aboive is needed to determine what type each character in teh password is going to be

  if (confirmSpecialCharacter) {
    numberConfirms ++;
    whatConfirmed[numberConfirms]= "Special"
  }

  var confirmNumericCharacter = confirm("Click OK to include numbers in your password.");

  if (confirmNumericCharacter) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Numeric"

  }

  var confirmLowerCase = confirm("Click OK to include lower case letters in your password.");
  if (confirmLowerCase) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Lowercase";
  }

  var confirmUpperCase = confirm("Click OK to include upper case letters in your password.");
  if (confirmUpperCase) {
    numberConfirms ++;
    whatConfirmed[numberConfirms] = "Uppercase";
  }

  for (i = 1; i<= characterLength; i++){

    // this is where i am going to generate the actual character for teh password

    // firtsd let us determine what type is teh nth character in teh password

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
       nextCharacter=oddCharacters();
       break;
   }
    
  
       determinedPassword += nextCharacter;
       //console.log(i,nextCharacter,determinedPassword);
  }
  console.log(determinedPassword);

}


function lowerCase() {
    // randomly choose a lower case character
    //var randomAlphalower = alphaLower[Math.floor(Math.random() * 25)];
   
    return(alphaLower[Math.floor(Math.random() * 25)]);

   
}

function upperCase() {
    // randomly choose an upper case character
    var randomAlphaupper = alphaUpper[Math.floor(Math.random()*25)];
    return (randomAlphaupper);
}

function numericCharacter() {
    //randomly choose a number
    var numValue = numericValues[Math.floor(Math.random() * 9)];
    return (numValue);
    
}

function oddCharacters() {
    //randomly choose a special character
    var randomSpecial = specialCharacters[Math.floor(Math.random() * 3)];
    return (randomSpecial);
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
