var lowercaseArray = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; // this is gonna contain whatever the user chooses (yes not no) into one giant array that concatinates from the other arrays
var generateBtn = document.querySelector('#generate');

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

function randomize(array)  {
    var randomArrayValue = array [Math.floor(Math.random() * array.length)];
    return randomArrayValue
  }

function generatePassword() {
    var lengthMsg = parseInt (prompt('How many characters would you like? Please choose between 9-128 characters'));
    console.log(lengthMsg);
    if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
        console.log('approved');
    } else {
        console.log('wrong, try again');
        alert('Unfortunatley, you must choose between 9-128 characters');
        return;
    }
    
    var lowercaseMsg = confirm('do you want to include lowercase characters in your password?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log('add lowercase characters');
    } else {
        console.log('dont add lowercase');
    }
    
    var uppercaseMsg = confirm('do you want to include UPPERCASE characters in your password?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('add uppercase characters');
    } else {
        console.log('dont add uppercase');
    }
    
    var numberMsg = confirm('do you want to include numbers in your password?');
    console.log(numberMsg);
    if (numberMsg === true) {
        console.log('cool add in numbers');
    } else {
        console.log('too bad, numbers are cool');
    }
    
    var specialCharMsg = confirm('do you want to include special !@#$%^&() characters in your password?');
    console.log(specialCharMsg);
    if (specialCharMsg === true) {
        console.log('cool add in special !@#$%^&() characters');
    } else {
        console.log('too bad, special !@#$%^&*() are really cool');
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
// for (var index = 0; index < lengthMsg; index++) {

//   var randomNumber = Math.floor(Math.random() * superArray.length);
//   password += superArray[randomNumber];
//   console.log('this is the superArray in the loop' + superArray)
// }

