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

  //Need a function to check that the input is equal to or more than 8 or equal to or less than 128 characters with an if/else statement
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

  //passChoice is an empty array that will get filled with the persons answers to the questions below
  const passChoice = [];
  //this will alert the user to select what criteria they want in their password
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
  //if the array is empty, the person must be prompted to select at least one option option
  if (passChoice.length === 0) {
    window.alert("You must select at least one character option");
  } else {
    return passChoice;
  }
};

// This will take in passwordLength and passwordCriteria and return a string
const createRandomPassword = (passwordLength, passwordCriteria) => {
  const theArray = [];
  //create a for loop, loop will repeat until desired length set by user is met
  for (let i = 0; i < passwordLength; i += 1) {
    const randomNumber = Math.floor(Math.random() * passwordCriteria.length);
    //the loop will continue to pick a random character until the length is met
    const randomArray = passwordCriteria[randomNumber];

    const numberArray = Math.floor(Math.random() * randomArray.length);

    const randomCharacter = randomArray.charAt(numberArray);
    theArray.push(randomCharacter); //picks random character
  }
  return theArray.join("");
};

//EDIT ABOVE

// main function to generate the random password
const generatePassword = () => {
  // get the password length from the user
  const passwordLength = getPasswordLength();

  // get the password criteria from the user
  const passwordCriteria = getPasswordCriteria();

  // create random password using the length set above and the criteria defined above
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
