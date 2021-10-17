// Button generator
var generateBtn = document.querySelector("#generate")

// Password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    // lowercase, uppercase, number & special character definition
    var passwordCharSet = {
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      specialCharacters: "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~",
    };
  
    var passwordLength = window.prompt("Please enter the number of characters desired, must be between 8-128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128) {
    };
  
    var numbers = window.confirm("Would you like numbers in your password?");
    if (numbers === true) {
      passwordCharSet += passwordCharSet.numbers;
    };
  
    var lowerCase = window.confirm("Would you like lowercase letters in your password?");
    if (lowerCase === true) {
      passwordCharSet += passwordCharSet.lowerCase;
    };
  
    var upperCase = window.confirm("Would you like uppercase letters in your password?");
    if (upperCase === true) {
      passwordCharSet += passwordCharSet.upperCase;
    };
  
    var specialCharacters = window.confirm("Would you like special characters in your password?");
    if (specialCharacters === true) {
      passwordCharSet += passwordCharSet.specialCharacters;
    };
  
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
  };
};

// Prompts after generate password is clicked


// event listener
generateBtn.addEventListener("click", writePassword);
document.getElementById("#placeholder");
