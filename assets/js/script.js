// Assignment Code
var generateBtn = document.querySelector('#generate');

var lowerEl = ['abcdefghijklmnopqrstuvwxyz']
var upperEl = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var numbersEl = ['0123456789']
var symbolsEl = ['!@#$%^&*=+>,?.<']
var parameters = '';
var newPassword = '';

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

   
    

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
function generatePassword() {
    //ask questions "do you want letters" "do you want numbers" 'how many characters'
    // var lowercase= confirm("Do you need lowercase letters?");
    // var uppercase = confirm("Do you need uppercase letters?");
    // var numbers = confirm('Do you need numbers?');
    // var symbols= confirm('Do you need special characters?');
    var length = prompt('Choose a character count between 8 and 128.');

    while (length < 8 || length > 128) {
        alert('You must select a number between 8 and 128.');
        var length = prompt('Choose a character count between 8 and 128.');
    }

    if (length >= 8 && length <= 128) {
        var lowercase = confirm('Do you need lowercase letters?');
        var uppercase = confirm('Do you need uppercase letters?');
        var numbers = confirm('Do you need numbers?');
        var symbols = confirm('Do you need special characters?');
    }

    if (
        lowercase === false &&
        uppercase === false &&
        numbers === false &&
        symbols === false
    ) {
        alert('You must select at least one option.');
    }

    if (lowercase == true) {
        parameters = parameters.concat(lowerEl);
    }
    else {
      parameters = parameters.concat(upperEl,numbersEl,symbolsEl)
    }
    if (uppercase == true) {
        parameters = parameters.concat(upperEl);
    }
    else {
      parameters = parameters.concat(lowerEl,numbersEl,symbolsEl)
    }
    if (numbers == true) {
        parameters = parameters.concat(numbersEl);
    }
    else {
      parameters = parameters.concat(upperEl,lowerEl,symbolsEl)
    }
    if (symbols == true) {
        parameters = parameters.concat(symbolsEl);
    }
    else {
      parameters = parameters.concat(upperEl,numbersEl,lowerEl)
    }
    console.log('parameters', parameters);  
  
    newPassword = '';
    //for loop for the number of characters
 for (let i = 0; i < length; i++) {
  newPassword =
      newPassword + parameters[Math.floor(Math.random() * parameters.length)];
  console.log('newPassword', newPassword);
}
    return newPassword
    generatePassword();
}  

