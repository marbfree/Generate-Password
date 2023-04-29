// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const passwordLength = window.prompt("What length would you like your password to be? \nChoose a length between 8 and 128 characters.");
  const specialChars = window.prompt("Would you like to include special characters?");
  const upperCase = window.prompt("Would you like to include UPPERCASE letters?");
  const lowerCase = window.prompt("Would you like to include lowercase letters?");
}
