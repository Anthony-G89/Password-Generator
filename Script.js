// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){

 var possibleCharacters= [];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Numbers= [0,1,2,3,4,5,6,7,8,9,]
var Symbols= ['!','@','#','$','%','^','&','*','(',')','_','+'];

var length= prompt('How many character would you like.');
var lowerCaseQuestion= confirm('Do you want a lowercase character.');
var upperCaseQuestion= confirm('Do you want a uppercase character.');
var numberQuestion= confirm('Do you want a Number.');
var SymbolsQuestion= confirm('Do you want to add a symbol.');

if (lowerCaseQuestion){
    possibleCharacters=possibleCharacters.concat(lowerCase); 
}
if (upperCaseQuestion){
    possibleCharacters=possibleCharacters.concat(upperCase); 
}

if (numberQuestion){
  possibleCharacters=possibleCharacters.concat(Numbers); 
}

if (SymbolsQuestion){
  possibleCharacters=possibleCharacters.concat(Symbols); 
}

console.log(possibleCharacters);




// for loop to the length of that varible

for ( i=0; i < length; i++){
  password = password + lowerCase, upperCase,Numbers,Symbols,(Math.floor(Math.random()* Math.floor(lowerCase,upperCase,Numbers,Symbols.length -1)));

}




  return   document.getElementById("#password") ,lowerCase,upperCase,Numbers,Symbols= password
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
//for (let i = 0; i < 10; i++) {
  //var CA_rps = ["r", "p", "s"];
//var rv = Math.floor(Math.random()*CA_rps.length);
//cChoice=CA_rps[rv];
//console.log(cChoice);

  
//}