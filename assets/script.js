// Assignment Code
const generateBtn = document.querySelector("#generate");

// Prompt the user to give a desired password length
const getPasswordLength = () => {
  //prompt user to enter a length with a pop-up box
  const whatLength = window.prompt(
    "How long would you like your password to be?"
  );

  //turn the users answer, which is a string, into a number
  const passwordLength = parseInt(whatLength);

  //Need a function to check that the input is equal to or more than 8 or equal to or less than 128 characters (if/else statement)
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    window.prompt("Password must be at least 8 and under 128 characters long");
  }
};

// Prompt the user to select what criteria they want the password to contain,
// Lowercase? Uppercase? Numbers? Symbols? They must pick at least one.

const getPasswordCriteria = () => {
  const doLowercase = confirm("Do you want lowercase characters?");
  const doUppercase = confirm("Do you want uppercase characters?");
  const doNumbers = confirm("Do you want number characters?");
  const doSpecialChars = confirm("Do you want special characters?");

  //Need a const for characters //    "abcdefghijklmnopqrstuvwxyz",
  // "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //  "0123456789",
  // " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",

  const passChoice = [];
  //passChoice is an empty array that will get filled with the persons answers to the questions above
  if (doLowercase) {
    passChoice.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (doUppercase) {
    passChoice.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (doNumbers) {
    passChoice.push("0123456789");
  }
  if (doSpecialChars) {
    passChoice.push("!#$%&()*+,-./:;<=>?@[]^_`{|}~");
  }
  if (passChoice.length === 0) {
    window.alert("you must choose at least one option");
  } else {
    return passChoice;
  }
};

// This will take in passwordLength and passwordCriteria and return a string
const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
