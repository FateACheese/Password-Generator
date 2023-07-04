// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var numberGen = "1234567890";
var specialChar = "!@#$%^&*_-()";

// Write password to the #password input
function generatePassword() {
  var length = prompt("How long do you want your password to be?");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Password must be a number and be between 8 and 128 characters");
  }

  var hasUpper = confirm("Do you want uppercase letters in your password");
  var hasLower = confirm("Do you want lowercase letters in your password");
  var hasNumeric = confirm("Do you want numbers in your password");
  var hasSpecial = confirm("Do you want special characters in your password");

  var possibleChars = "";
  //Do this if statement for all variables
  if (hasUpper) {
    possibleChars += upperCase;
  }

  var password = "";
  for (i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * length);
    if (i >= possibleChars.length) {
      return password;
    }
    password += possibleChars[randomIndex];
  }

  console.log(password);
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
