// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
const generateBtn = document.querySelector("#generate");

 // Add event listener to button and calling function
 generateBtn.addEventListener("click", function() {
  passwordDecisions();
  });

// Function for prompts and adding password to textvalue
function passwordDecisions() {

// Assignment Code for strings and arrays
  let passwd = [];
  let passArray = [];
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const lowerArr = lower.split("");
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const upperArr = upper.split("");
  const num = "0123456789";
  const numArr = num.split("");
  const speChar = "!#$%&'()*+,'()*+,-./:;<=>?@[\]^_`{|}~"
  const speCharArr = speChar.split("");


// Resets final password
  let finalPassword = "";

  // Write password to the #password input
  let passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

  // password length 
  let passwordLength = prompt("What is the length of your password?");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid length for the password with at least 8 characters and no more then 128 characters.");
    return;
  }
 
  // password length must be a valid numberical length
  // isNan() returns true when input is not a number (checks user input is a number)
  if (isNaN(passwordLength)) {
    alert("Please enter a valid numerical length for the password with at least 8 characters and no more than 128 characters.");
    return;
  }
  
  // Declaring variables for other 4 password options
  const lowerCase = confirm("Do you want lower case letters in your password?");
  const upperCase = confirm("Do you want upper case letters in your password?");
  const numCase = confirm("Do you want numbers in your password?");
  const specCase = confirm("Do you want special characters in your password?");
  
  // Adding lower case, upper case, numbers, and special characters to arrays
  if (lowerCase === true) {
    passArray = passArray.concat(lowerArr)
   
  }
  if (upperCase === true) {
    passArray = passArray.concat(upperArr);
    
    } 
  if (numCase === true) {
    passArray = passArray.concat(numArr);
      
    }
  if (specCase === true) {
    passArray = passArray.concat(speCharArr);
     
    }
  // Alerting user that they must choose at least one of the options for a password
  if ((lowerCase === false) && (upperCase === false) && (numCase === false) && (specCase === false)) {
      alert("Please chose at least one of the options for your password.");
    }
   
  
    // for loop to create a random password with the correct length and options
  const passwordArrayLength = passArray.length;
  for (let i = 0; i < passwordLength; i++) {
    
    let specialNum = Math.ceil(Math.random()*passwordArrayLength);
    passwd.push(passArray[specialNum]);
  }
  finalPassword = passwd.join('');
  
  
  // Writes new password to the #password input
  passwordText.value = finalPassword;
}
