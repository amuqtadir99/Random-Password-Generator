       // Selecting the password input field
       const passwordBox = document.getElementById('password');
       const passwordLength = 16;

       // Characters used in password generation
       const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
       const numbers = '0123456789';
       const specialCharacters = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

       const allChars = upperCase + lowerCase + numbers + specialCharacters;

       // Function to generate a random password
       function generatePassword() {
           let password = '';

           // Ensure at least one character from each category
           password += upperCase[Math.floor(Math.random() * upperCase.length)];
           password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
           password += numbers[Math.floor(Math.random() * numbers.length)];
           password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

           // Fill the remaining characters randomly
           while (password.length < passwordLength) {
               password += allChars[Math.floor(Math.random() * allChars.length)];
           }

           // Shuffle the generated password to make it more secure
           password = password.split('').sort(() => Math.random() - 0.5).join('');

           // Display the generated password
           passwordBox.value = password;
       }

       // Function to copy password to clipboard
       function copyPassword() {
           passwordBox.select();
           document.execCommand("copy");
           alert("Password copied to clipboard!");
       }