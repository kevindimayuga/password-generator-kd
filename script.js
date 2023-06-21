// This will provide interactivity to the Password Generator application for users to create an random password based on user criteria

var generateBtn = document.querySelector("#generate");

// Set variables declarations

var confirmPasswordLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;

// Variable Arrays

var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Excluded double quote, backslash, underscore, grave accent (backtick) special characters from this array
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "|", "}", "~"];

// This function will prompt the user to choose how many characters they want in their password between 8-128
function generatePassword() {
  var confirmPasswordLength = (prompt("How many characters would you like your password to contain (between 8-128 characters)?"));
  
  // This while loop will loop through a block of code as long as the specified condition below is true
  while(confirmPasswordLength <= 7 || confirmPasswordLength >= 129) {
    alert("Your password length must be between 8-128 characters. Please try again");
    var confirmPasswordLength = (prompt("How many characters would you like your password to contain (between 8-128 characters)?"));
    } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);