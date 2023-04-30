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

let options = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['!','#','$','%','&','(',')','*','+','-','/',':',';','=','?','@','[',']','^','_','{','|','}','~'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};

function generatePassword() {
  const passwordLength = window.prompt("What length would you like your password to be? \nChoose a length between 8 and 128 characters.");
  if (passwordLength >= minLength && passwordLength <=maxLength){
    userInput = userInput.concat(passwordLength);
    console.log(passwordLength);
  
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
    userInput = userInput.concat(options.numbers);
    console.log(userInput);
   } else ;

for (let i = 0; i < passwordLength; i++) {

let randomPass = userInput[Math.floor(Math.random() * userInput.length)]; 
console.log(randomPass);
}
}
