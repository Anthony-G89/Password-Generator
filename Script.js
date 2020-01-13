var characterRange= document.getElementById('characterRange');
var characternumber= document.getElementById('characternumber');
var includeUppercaseElement = document.getElementById('includeUppercase');
var includenumberElement = document.getElementById('includenumbers');
var incoudesymbolsElement= document.getElementById('includesymbols')

var form= document.getElementById('password-generator');

var upperCase_Char_Codes= arrayFromLowToHigh(65,90);
var upperLower_Char_Codes= arrayFromLowToHigh(97,122);
var Numbers_Char_Codes= arrayFromLowToHigh(48,57);
var Symbols_Char_Codes= arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91,96).concat(
        arrayFromLowToHigh(123,126)
    )
);

characterRange .addEventListener('input', synccharacterRange);
characterNumber .addEventListener('input', syncCharacterNumber);

form.addEventListener('submit',e =>{
    e.preventDefault()
    var characternumber = characternumber.value
    var includeUppercase= includeUppercaseElement.checked
    var includenumber= includenumberElement.checked
    var includesymbols= includesymbolsElement.checked
    var password= generatePassword(characternumber, includeUppercase, includelowercase, includenumber, includesymbols)
})

function generatePassword(characternumber, includeUppercase, includelowercase, includenumber, includesymbols){
    console.log(upperCase_Char_Codes);

}

function arrayFromLowToHigh(low, high){
    var array= []
    for (var i=low; i <= high; i++){
        array.push(i)

    }
    return array
}

function syncCharacterNumber(e){
    var value= e.target.value
    characterRange.value= value
    characternumber.value= value
}
