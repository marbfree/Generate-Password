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

//Created a Max and Min length for password
let minLength = 8;
let maxLength = 128;

//Created an array for the users input
let characterTypes = []

// Added array options for user to choose from
let options = {
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  special: ['!','#','$','%','&','(',')','*','+','-','/',':',';','=','?','@','[',']','^','_','{','|','}','~'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
};

//  Created a function for user to input their password options to add to the array
function generatePassword() {
  const passwordLength = window.prompt("What length would you like your password to be? \nChoose a length between 8 and 128 characters.");
  if (passwordLength >= minLength && passwordLength <= maxLength){
    console.log(passwordLength);
  } else {
    alert("Please try again!"); 
    return;
  } 
  
  const askSpecial = window.confirm("Please confirm the use of special characters in your password.");
  if (askSpecial) {
    characterTypes = characterTypes.concat(options.special);
    console.log(characterTypes);
  } else ;
  
  const askUpperCase = window.confirm("Please confirm the use of UPPERCASE letters in your password.");
   if (askUpperCase) {
    characterTypes = characterTypes.concat(options.upperCase);
    console.log(characterTypes);
   } else ;
 
  const askLowerCase = window.confirm("Please confirm the use of lowercase letters in your password.");
   if (askLowerCase) {
    characterTypes = characterTypes.concat(options.lowerCase);
    console.log(characterTypes);
   } else ;

  const askNumbers = window.confirm("Please confirm the use of numbers in your password."); 
   if (askNumbers) {
    characterTypes = characterTypes.concat(options.numbers);
    console.log(characterTypes);
   } else ;

let randomPassarr = []

//  Loop to grab value of criteria selected amount of times
for (let i = 0; i < passwordLength; i++) {

// pulls from characterTypes selection randomly and adds password to page
let randomCharacter = characterTypes[Math.floor(Math.random() * characterTypes.length)]; 
console.log(randomCharacter);
randomPassarr.push(randomCharacter);
}

let randomPass = randomPassarr.join("");

characterTypes = [];

return randomPass;
};