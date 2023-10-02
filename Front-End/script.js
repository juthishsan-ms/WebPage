/*-----Form transition-----*/

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

/*-----Image Transition-----*/

var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}


/*-----Form Vaidation-----*/

function validateLoginForm() {

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var errorMessage = document.getElementById("loginError");
    var passErrorMessagae = document.getElementById("passError");


    errorMessage.innerHTML = "";
    passErrorMessagae.innerHTML = "";

    if (username.trim() === "") {
        errorMessage.innerHTML = "Please enter a username or email.";
        return false;
    }

    if (password.trim() === "") {
        passErrorMessagae.innerHTML = "Please enter a password.";
        return false;
    }

    return true;
}

function validateRegisterForm() {

    var firstName = document.getElementById("registerFirstName").value;
    var lastName = document.getElementById("registerLastName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var mobile = document.getElementById("registerMobile").value;
    var errorMessage = document.getElementById("registerError");

    errorMessage.innerHTML = "";

    if (firstName.trim() === "") {
        errorMessage.innerHTML = "Please enter your first name.";
        return false;
    }

    if (lastName.trim() === "") {
        errorMessage.innerHTML = "Please enter your last name.";
        return false;
    }

    if (email.trim() === "") {
        errorMessage.innerHTML = "Please enter an email address.";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (password.trim() === "") {
        errorMessage.innerHTML = "Please enter a password.";
        return false;
    } else if (password.length < 8) {
        errorMessage.innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    if (mobile.trim() === "") {
        errorMessage.innerHTML = "Please enter a mobile number.";
        return false;
    }

    return true;
}
