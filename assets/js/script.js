var characters = "";

// generate password function
function generatePassword() {
  // prompt for length of password between 8 and 128 characters
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);

  // validate password length
  if(passwordLength < 8 || passwordLength >128 || !passwordLength){
    window.alert("Please try again. Enter a valid number between 8 and 128.");
    return generatePassword();
  };

  confirmCharacters();

  // for loop to generate random password
  var randomPassword ="";
  for(i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);

    randomPassword += characters.charAt(randomNumber);
  };

  return randomPassword;
};
// confirm character function
function confirmCharacters() {
  //reset characters
  characters = "";
  // confirm lowercase characters
  var confirmLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (confirmLowerCase){
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    characters += lowerCaseChar;
  };

  // confirm uppercase characters
  var confirmUpperCase = window.confirm(" Click OK to confirm including uppercase characters.");
  if (confirmUpperCase){
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters += upperCaseChar;
  };

  // confirm numeric characters
  var confirmNumeric = window.confirm("Click OK to confirm including numeric characters.");
  if(confirmNumeric){
    var numericChar = "0123456789";
    characters += numericChar;
  };

  // confirm special characters
  var confirmSpecial = window.confirm("Click OK to confirm including special characters.");
  if(confirmSpecial){
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    characters += specialChar;
  };
  
  // validate 1 character type has been selected, in not window alert and return to confirm characters
  if (characters === ""){
    window.alert("Please select at least one character type.")
    return confirmCharacters();
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
