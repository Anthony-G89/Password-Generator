// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Numbers= [0,1,2,3,4,5,6,7,8,9,]
var Symbols= ['!','@','#','$','%','^','&','*','(',')','_','+'];

var length= confirm('Password must be 8-128 characters.');
var lowerCaseQuestion= confirm('Do you want a lowercase character.');
var upperCaseQuestion= confirm('Do you want a uppercase character.');
var numberQuestion= confirm('Do you want a Number.');
var SymbolsQuestion= confirm('Do you want to add a symbol.');

if (lowerCaseQuestion){
    alert('Lowercase will be added'); 
}
if (upperCaseQuestion){
    alert('Uppercase will be added');
}

if (numberQuestion){
    alert('A number will be added.');
}

if (SymbolsQuestion){
    alert('A symbol will be added.');
}


function generatePassword(){























  return "this is my password"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
