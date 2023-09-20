var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
  }
  else{
    MenuItems.style.maxHeight = "0px";
  }
}

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function login(){
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}

function register(){
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

/*const name =document.getElementById('name');
const mail =document.getElementById('mail');
const pass =document.getElementById('pass');
const cpassword =document.getElementById('cpassword');
//const mobile=document.getElementById('mobile');

LoginForm.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element,message) =>{

}

const validateInputs= () => {
  const usernameValue = name.value.trim();
  const emailValue = mail.value.trim();
  const passwordValue = pass.value.trim();
  const confirmPassword = cpassword.value.trim();
};*/