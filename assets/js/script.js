// generate password function
function generatePassword() {
  // prompt for length of password between 8 and 128 characters
  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  passwordLength = parseInt(passwordLength);

  if(passwordLength < 8 || passwordLength >128 || !passwordLength){
    window.alert("Please try again. Enter a valid number between 8 and 128.");
    return generatePassword();

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
