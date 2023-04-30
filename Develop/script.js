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
let userInput = []
// let userInput = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];

let options = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['!','#','$','%','&','(',')','*','+','-','/',':',';','=','?','@','[',']','^','_','{','|','}','~'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};

function generatePassword() {
  const passwordLength = window.prompt("What length would you like your password to be? \nChoose a length between 8 and 128 characters.");
  if (passwordLength >= minLength && passwordLength <=maxLength){
    console.log(passwordLength);
  } else if (!passwordLength >= minLength || !passwordLength <=maxLength) {
    window.prompt("Try again. Choose the length of your password between 8 and 128 characters.");
  } else return;

  const askSpecial = window.confirm("Please confirm the use of special characters in your password.");
  if (askSpecial) {
    userInput = userInput.concat(options.special);
    console.log(userInput);
  } else ;
  
  const askUpperCase = window.confirm("Please confirm the use of UPPERCASE letters in your password.");
   if (askUpperCase) {
      userInput = userInput.concat(options.upperCase);
      console.log(userInput);
   } else ;
 
  const askLowerCase = window.confirm("Please confirm the use of lowercase letters in your password.");
   if (askLowerCase) {
    userInput = userInput.concat(options.lowerCase);
    console.log(userInput);
   } else ;

  const askNumbers = window.confirm("Please confirm the use of numbers in your password."); 
   if (askNumbers) {
    userInput = userInput.concat(options.lowerCase);
    console.log(userInput);
   } else ;

  
 for (let i = 0; i < passwordLength; i++){
  userInput = userInput + i;
  console.log(userInput);
}

}

  // how to use the input password length to assign multiple random items from arrays