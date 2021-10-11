// Button generator
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Special character definition
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~"

// Password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;

}

// Prompts after generate password is clicked
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters desired, must be between 8-128 characters.");
    if (x >= 8 && x <= 128) {
      continue
    } else {
      false
    }

  var numbers = confirm("Would you like numbers in your password?");

  var lowerCase = confirm("Would you like lowercase letters in your password?");

  var upperCase = confirm("Would you like uppercase letters in your password?");

  var special = confirm("Would you like special characters in your password?");

  // Minimum count for all characters (numbers, special characters, lowercase & uppercase letters)
  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCase = "";
  var minimumUpperCase = "";
  var minimumSpecialCharacters = "";

  // Password generator functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};


  // if statements to check what the user selects for their password
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCase === true) {
    minimumLowerCase = functionArray.getLowerCase();
    minimumCount++;

  }

  if (upperCase ===  true) {
    minimumUpperCase = functionArray.getUpperCase();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  var randomPasswordGenerator = "";

  // For loop to get random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPick = Math.floor(Math.random() * 4);

    randomPasswordGenerator += randomNumberPick;

  }

  // ensures specified characters are added to the password
  randomPasswordGenerator += minimumNumbers;
  randomPasswordGenerator += minimumLowerCase;
  randomPasswordGenerator += minimumUpperCase;
  randomPasswordGenerator += minimumSpecialCharacters;

  return randomPasswordGenerator;

}