
 alert("Welcome to the Generator Password Page! To start creating your unique password press <Generate button>");
 
 var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
 var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
 //Function of password options

 function getPasswordOptions() {
  
   var length = parseInt(
     prompt("How many characters would you like your password to contain?")
   );

   if (length === undefined) {
    alert("Password length must be provided as a number");
   }
 
   if (length < 8) {
     alert("Password length must be at least 8 characters");
     return;
   }
 
   if (length > 128) {
     alert("Password length must less than 129 characters");
     return;
   }
 
   // Variable to store  all characters
   var hasSpecial = confirm(
     "Click OK to confirm including special characters."
   );
 
   var hasNumbers = confirm(
     "Click OK to confirm including numeric characters."
   );
 
   var hasLowerCased = confirm(
     "Click OK to confirm including lowercase characters."
   );
 
   var hasUpperCased = confirm(
     "Click OK to confirm including uppercase characters."
   );
 
   // Conditional statement to check if user does not include any types of characters
   if (
     hasSpecial === false &&
     hasNumbers === false &&
     hasLowerCased === false &&
     hasUpperCased === false
   ) {
     alert("Must select at least one character type");
     return;
   }
 
   // Object to store user input
   var userOptions = {
     length: length,
     hasSpecial: hasSpecial,
     hasNumbers: hasNumbers,
     hasLowerCased: hasLowerCased,
     hasUpperCased: hasUpperCased
   };
 
   return userOptions;
 }
 
 // Random function 
 function getRandom(arr) {
   var randomIndex = Math.floor(Math.random() * arr.length);
   var randomElement = arr[randomIndex];
 
   return randomElement;
 }
 
 // Function to generate password with user choice
 function generatePassword() {
   var options = getPasswordOptions();
   // Variable to store password 
   var result = [];
 
   // Array to store types of characters 
   var possibleCharacters = [];
 
   // Array to contain one of each type of chosen character 
   var guaranteedCharacters = [];
 
   // Conditional statement that adds array of special characters into array of possible characters based on user input
   // Push new random special character to guaranteedCharacters
   if (options.hasSpecial) {
     possibleCharacters = possibleCharacters.concat(special);
     guaranteedCharacters.push(getRandom(special));
   }
 
   // Conditional statement that adds array of numeric characters into array of possible characters based on user input
   // Push new random special character to guaranteedCharacters
   if (options.hasNumbers) {
     possibleCharacters = possibleCharacters.concat(numbers);
     guaranteedCharacters.push(getRandom(numbers));
   }
 
   // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
   // Push new random lower-cased character to guaranteedCharacters
   if (options.hasLowerCased) {
     possibleCharacters = possibleCharacters.concat(lowerCased);
     guaranteedCharacters.push(getRandom(lowerCased));
   }
 
   // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
   // Push new random upper-cased character to guaranteedCharacters
   if (options.hasUpperCased) {
     possibleCharacters = possibleCharacters.concat(upperCased);
     guaranteedCharacters.push(getRandom(upperCased));
   }
 
   // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
   for (var i = 0; i < options.length; i++) {
     var possibleCharacter = getRandom(possibleCharacters);
 
     result.push(possibleCharacter);
   }
 
   // Mix in at least one of each guaranteed character in the result
   for (var i = 0; i < guaranteedCharacters.length; i++) {
     result[i] = guaranteedCharacters[i];
   }
 
   // Transform the result into a string and pass into writePassword
   return result.join('');
 }
 
 // Get references to the #generate element
 var generateBtn = document.querySelector('#generate');
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector('#password');
 
   passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener('click', writePassword);
 