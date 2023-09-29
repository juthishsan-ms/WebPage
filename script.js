/*-----------form transition-------------*/

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
    x.style.left = "250px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
function register() {
    x.style.left = "-510px";
    y.style.right = "250px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

/*----------Form Vaidation------------*/


// Function to validate the login form
function validateLoginForm() {
    // Get the input field values
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var errorMessage = document.getElementById("loginError");

    // Reset any previous error messages
    errorMessage.innerHTML = "";

    // Check if username and password are empty
    if (username.trim() === "") {
        errorMessage.innerHTML = "Please enter a username or email.";
        return false;
    }

    if (password.trim() === "") {
        errorMessage.innerHTML = "Please enter a password.";
        return false;
    }

    // You can add more validation rules here if needed

    // If all validations pass, the form is valid
    return true;
}

// Function to validate the registration form
function validateRegisterForm() {
    // Get the input field values
    var firstName = document.getElementById("registerFirstName").value;
    var lastName = document.getElementById("registerLastName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var mobile = document.getElementById("registerMobile").value;
    var errorMessage = document.getElementById("registerError");

    // Reset any previous error messages
    errorMessage.innerHTML = "";

    // Check if first name and email are empty
    if (firstName.trim() === "") {
        errorMessage.innerHTML = "Please enter your first name.";
        return false;
    }

    if (email.trim() === "") {
        errorMessage.innerHTML = "Please enter an email address.";
        return false;
    }

    // Validate email format using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Check if password is empty and meets length requirement
    if (password.trim() === "") {
        errorMessage.innerHTML = "Please enter a password.";
        return false;
    } else if (password.length < 6) {
        errorMessage.innerHTML = "Password must be at least 6 characters.";
        return false;
    }

    // Check if mobile number is empty
    if (mobile.trim() === "") {
        errorMessage.innerHTML = "Please enter a mobile number.";
        return false;
    }

    // You can add more validation rules here if needed

    // If all validations pass, the form is valid
    return true;
}
