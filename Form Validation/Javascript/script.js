const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required.");
        nameInput.style.border="2px solid red"
        valid = false;
    } else {
        showSuccess(nameInput);
        nameInput.style.border="2px solid green"

    }

    // Validate email
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required.");
        emailInput.style.border="2px solid red"
        valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email.");
       
        valid = false;
    } else {
        showSuccess(emailInput);
        emailInput.style.border="2px solid green"
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Password is required.");
        passwordInput.style.border="2px solid red"
        valid = false;
    } else {
        showSuccess(passwordInput);
        passwordInput.style.border="2px solid green"
    }

    // If all inputs are valid, submit the form
   return true
});

// Function to display error message
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    input.classList.add("error");
    input.classList.remove("success");
}

// Function to display success state
function showSuccess(input) {
    const errorMessage = input.nextElementSibling;
    
    errorMessage.innerText = "";
    input.classList.add("success");
    input.classList.remove("error");
}

// Function to check if email is valid00
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
