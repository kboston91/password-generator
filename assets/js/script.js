// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbersEl = '0123456789';
var symbolsEl = '!@#$%^&*=+>,?.<';
var parameters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
 //ask questions "do you want letters" "do you want numbers" 'how many characters'
// var lowercase= confirm("Do you need lowercase letters?");
// var uppercase = confirm("Do you need uppercase letters?");
// var numbers = confirm('Do you need numbers?');
// var symbols= confirm('Do you need special characters?');
var length = prompt('Choose a character count between 8 and 128.');
 //for loop for the number of characters 
 for (let i=0; i <= length; i++) {
   console.log(length);

   while (length < 8 || length > 128){
    alert("You must select a number between 8 and 128.");
    var length = prompt('Choose a character count between 8 and 128.');
  }
   
   
   if (length >=8 && length <=128){
    var lowercase= confirm("Do you need lowercase letters?");
    var uppercase = confirm("Do you need uppercase letters?");
    var numbers = confirm('Do you need numbers?');
    var symbols= confirm('Do you need special characters?');
   }

   while (lowercase === false && uppercase === false && numbers === false && symbols ===false) {
     alert('You must select at least one option.')
   }
//all 4
  if (lowercase === true && uppercase === true && numbers === true && symbols === true) {
      parameters = character.concat(lowerEl,upperEl,numbersEl,symbolsEl);
   }
// 3 options true
if (lowercase === true && uppercase === true && numbers === true) {
  parameters = character.concat(lowerEl,upperEl,numbersEl);
}
if (lowercase === true && uppercase === true && symbols === true) {
  parameters = character.concat(lowerEl,upperEl,symbolsEl);
}
if (lowercase === true && numbers === true && symbols === true) {
  parameters = character.concat(lowerEl,numbersEl,symbolsEl);  
}
if (uppercase === true && numbers === true && symbols === true) {
  parameters = character.concat(upperEl,numbersEl,symbolsEl);
}
// 2 options true 
if (lowercase === true && uppercase === true) {
  parameters = character.concat(lowerEl,upperEl);
}
if (lowercase === true && numbers === true) {
  parameters = character.concat(lowerEl,numbersEl);
}
if (lowercase === true && symbols === true) {
  parameters = character.concat(lowerEl,symbolsEl);
} 
if (uppercase === true && numbers === true) {
  parameters = character.concat(upperEl,numbersEl);
}
if (uppercase === true && symbols === true) {
  parameters = character.concat(upperEl,symbolsEl);
}
if (numbers === true && symbols === true) {
  parameters = character.concat(numbersEl,symbolsEl);
}   
// 1 option true
if (lowercase === true) {
  parameters = character.concat(lowerEl);
}
if (uppercase === true) {
  parameters = character.concat(upperEl);
}
if (numbers === true) {
  parameters = character.concat(numbersEl);
}
if (symbols === true) {
  parameters = character.concat(symbolsEl);
}

console.log(parameters)
  
 
 //inside the for loop, if statements 'if they wanted letters..' randomly pick 1 letter and (+random letter)
 //inside the for loop, 'if they want numbers' randomly pick 1 number and (+random number)
 //inside the for loop, if they want uppercase 
  var newPassword= ''
  newPassword = newPassword+parameters[Math.floor(Math.random() * parameters.length)];
  console.log(newPassword)
}
  return newPassword
}