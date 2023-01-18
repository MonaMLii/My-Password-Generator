// Assignment Code

var generateBtn = document.querySelector("#generate");
var enter;
var okNumber;
var okAlphabet;
var okUpperAlphabet;
var okSpecialChars;
var option;
// var password = generatePassword();
var passwordText = document.querySelector("#password");
var pw = [];



//Set characters for passwords
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "?", ".", "+", "_", "-", "=", "~", "`", "/", ",", "'", "(", ")", ":", ";", "?"];
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  

function removeCommas(arr) {
  return arr.join('').replace(/,/, '')
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//add prompt when click generate
// promt with length of password
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like for your password? Choose between 8 - 128 characters"));

  if (!enter) {
    alert("Please enter the value!");
    enter = parseInt(prompt("How many characters would you like for your password? Choose between 8 - 128 characters"));

  } else if (enter < 8 || enter > 128) {

 // ask for criteria
  } else {
    okNumber = confirm("Will the password include number?");
    okSpecialChars = confirm("Will the password include special characters?")
    okAlphabet = confirm("Will the password include lowercase letters?");
    okUpperAlphabet = confirm("Will the password include uppercase letters?");
  };

//in case criteria !selected
  if (!okNumber && !okAlphabet && !okSpecialChars && !okUpperAlphabet) {
    option = alert("Criteria Must Be Selected!");

// when criteria is selected
  } else if (okAlphabet && okNumber && okSpecialChars && okUpperAlphabet) {
    option = specialChars.concat(number, alphabet, upperAlphabet);

//choose 3 options
  } else if (okAlphabet && okUpperAlphabet && okSpecialChars) {
    option = specialChars.concat(alphabet, upperAlphabet);

  } else if (okAlphabet && okUpperAlphabet && okNumber) {
    option = number.concat(alphabet, upperAlphabet);

  } else if (okNumber && okSpecialChars && okAlphabet) {
    option = number.concat(specialChars, alphabet);

  } else if (okNumber && okSpecialChars && okUpperAlphabet) {
    option = number.concat(specialChars, upperAlphabet);

    // choose 2 options
  } else if (okAlphabet && okUpperAlphabet) {
    option = alphabet.concat(upperAlphabet);

  } else if (okAlphabet && okSpecialChars) {
    option = alphabet.concat(specialChars);

  } else if (okAlphabet && okNumber) {
    option = alphabet.concat(number);

  } else if (okNumber && okSpecialChars) {
    option = number.concat(specialChars);

  } else if (okUpperAlphabet && okSpecialChars) {
    option = upperAlphabet.concat(specialChars);

  } else if (okUpperAlphabet && okNumber) {
    option = upperAlphabet.concat(number);

// 1 option    
  } else if (okAlphabet) {
    option = alphabet;

  } else if (okUpperAlphabet) {
    option = upperAlphabet;

  } else if (okNumber) {
    option = number;

  } else if (okSpecialChars) {
    option = specialChars;  
  };

// Random selection for the password
  for (var i = 0; i < enter; i++) {
  var chooseOption = option[Math.floor(Math.random() * option.length)];
  pw.push(chooseOption);
}
  
  var oneStringPw = removeCommas(pw);

  passwordText.textContent = oneStringPw;
  // pw.toString()
}

//function copy

// function copyPassword() {
//   var copyText = document.passwordText;
//   copyText.select();
//   document.execCommand("copy");  
// }




// function() {
//   // passwordText.value = password;
// }
 
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }


