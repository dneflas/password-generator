// generate password function
function generatePassword() {
  // prompt for length of password between 8 and 128 characters
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);

  if(passwordLength < 8 || passwordLength >128 || !passwordLength){
    window.alert("Please try again. Enter a valid number between 8 and 128.");
    return generatePassword();
  };

  // confirm lowercase characters
  var characters = "";
  var confirmLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (confirmLowerCase){
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    characters += lowerCaseChar;
    console.log(characters);
  };

  // confirm uppercase characters
  var confirmUpperCase = window.confirm(" Click OK to confirm including uppercase characters.");
  if (confirmUpperCase){
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters += upperCaseChar;
    console.log(characters);
  };

  // confirm numeric characters
  var confirmNumeric = window.confirm("Click OK to confirm including numeric characters.");
  if(confirmNumeric){
    var numericChar = "0123456789";
    characters += numericChar;
    console.log(characters);
  };

  // confirm special characters
  var confirmSpecial = window.confirm("Click OK to confirm including special characters.");
  if(confirmSpecial){
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    characters += specialChar;
    console.log(characters);
  };

  console.log(characters);
  
  //confirm 1 character type has been selected, in not window alert and return to confirm characters


  // for loop to generate random characters
  var randomPassword ="";
  for(i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);
    console.log(randomNumber);

    randomPassword += characters.charAt(randomNumber);
    console.log(randomPassword);

  }
  return randomPassword;
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
