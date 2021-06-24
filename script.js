var lowercaseArray = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; 
var generateBtn = document.querySelector('#generate');
// executes the password
function writePassword() {
    var password = putItAllTogether();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}
// provides a button ot start the functions
generateBtn.addEventListener('click', writePassword);
// randomizes arrays
function randomize(array)  {
    var randomizeArrayValue = array [Math.floor(Math.random() * array.length)];
    return randomizeArrayValue
  }
// starts the generate password process / confirms the number of characters
function generatePassword() {
    var lengthMsg = parseInt (prompt('How many characters would you like? Please choose between 8-128 characters.'));
    console.log(lengthMsg);
    if ((lengthMsg >= 8 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
        console.log('approved');
    } else {
        console.log('wrong, try again');
        alert('Didnt I say pick between 8-128? Come on man, start over.');
        return;
    }
    // confirms if user wants lowercased letters
    var lowercaseMsg = confirm('Do you want some lower cased letters mixed in there?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log('add lowercase characters');
    } else {
        console.log('dont add lowercase');
    }
    // confirms if user wants uppercase letters
    var uppercaseMsg = confirm('How about some upper cased?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('add uppercase characters');
    } else {
        console.log('dont add uppercase');
    }
    // confirms if user wants numbers
    var numberMsg = confirm('How about some numbers?');
    console.log(numberMsg);
    if (numberMsg === true) {
        console.log('add numbers');
    } else {
        console.log('dont add numbers');
    }
    // confirms if user wants special characters
    var specialCharMsg = confirm('How about some of these funny looking things? - !@#$%^&()');
    console.log(specialCharMsg);
    if (specialCharMsg === true) {
        console.log('add in special !@#$%^&() characters');
    } else {
        console.log('dont add special !@#$%^&() characters');
        alert('Alright, Alight, Alright')
    }

    var inputValue = {
    inputLenth: lengthMsg,
    hasLowercase: lowercaseMsg,
    hasUppercase: uppercaseMsg,
    hasSpecialChar: specialCharMsg,
    hasNumber: numberMsg,
    }
    console.log(inputValue)
    return inputValue
}
  // puts it all together
    function putItAllTogether() {
    var userChoices = generatePassword()  
    var superArray = []
    var possibleChar = []
      
    if (userChoices.hasLowercase===true){
      possibleChar = possibleChar.concat(lowercaseArray)
      possibleChar.push(randomize(lowercaseArray))
    }

    if (userChoices.hasUppercase===true){
      possibleChar = possibleChar.concat(uppercaseArray)
      possibleChar.push(randomize(uppercaseArray))
    }
  
    if (userChoices.hasSpecialChar===true){
      possibleChar = possibleChar.concat(specialCharacters)
      possibleChar.push(randomize(specialCharacters))
    }

    if (userChoices.hasNumber===true){
      possibleChar = possibleChar.concat(number)
      possibleChar.push(randomize(number))
    }
    // for loop for arrays
    for (var index = 0; index < userChoices.inputLenth; index++) {
      var almostSuperArray = randomize(possibleChar)
      superArray.push(almostSuperArray)
    }
    console.log(superArray)
    return superArray.join("")
  }






   

