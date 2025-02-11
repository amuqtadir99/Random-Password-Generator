// Select DOM elements AFTER the document has fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const passwordBox = document.getElementById("password");
    const copyBtn = document.getElementById("copyBtn");
    const passwordLength = 16;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

    const allChars = upperCase + lowerCase + numbers + specialCharacters;

    // Function to generate a random password
    function generatePassword() {
        let password = "";

        // Ensure at least one character from each category
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

        // Fill remaining characters randomly
        while (password.length < passwordLength) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        // Shuffle the password for better randomness
        password = password.split("").sort(() => Math.random() - 0.5).join("");

        // Display the password in the input field
        passwordBox.value = password;

        // Show the copy button after generating password
        copyBtn.style.display = "block";
        copyBtn.classList.remove("copied");
    }

    // Function to copy password to clipboard
    function copyPassword() {
        passwordBox.select();
        document.execCommand("copy");

        // Update UI to indicate successful copy
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';

        // Reset button text after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove("copied");
            copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Password';
        }, 2000);
    }

    // Attach functions to global window object so they are accessible in HTML
    window.generatePassword = generatePassword;
    window.copyPassword = copyPassword;
});
