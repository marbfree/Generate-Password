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

let options = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    console.log(options.special);
  } else ;
  
  const askUpperCase = window.confirm("Please confirm the use of UPPERCASE letters in your password.");
   if (askUpperCase) {
    console.log(options.upperCase);
   } else ;
 
  const askLowerCase = window.confirm("Please confirm the use of lowercase letters in your password.");
   if (askLowerCase) {
    console.log(options.lowerCase);
   } else ;

  const askNumbers = window.confirm("Please confirm the use of numbers in your password."); 
   if (askNumbers) {
    console.log(options.numbers);
   }else ;
  }

  // how to use the input password length to assign multiple random items from arrays