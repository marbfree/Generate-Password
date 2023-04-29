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

let minLength = 8;
let maxLength = 128;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let special = ['!','#','$','%','&','(',')','*','+','-','/',':',';','=','?','@','[',']','^','_','{','|','}','~'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function generatePassword() {
  const passwordLength = window.prompt("What length would you like your password to be? \nChoose a length between 8 and 128 characters.");
  if (passwordLength >= minLength && passwordLength <=maxLength){
    console.log(passwordLength);
  } else return;
  
  const specialChars = window.confirm("Please confirm the use of special characters.");
  if (specialChars) {
    console.log("True");
  } else console.log("False");

  const upperCase = window.confirm("Please confirm the use of UPPERCASE letters.");
   if (upperCase) {
    console.log("True");
   } else console.log("False");
 
  const lowerCase = window.confirm("Please confirm the use of lowercase letters.");
   if (lowerCase) {
    console.log("True");
   } else console.log("False");
  }