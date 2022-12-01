const pwd = document.getElementById("pwd");
const confirm_pwd = document.getElementById("confirm-pwd");

function validatePasswords() {
  if (pwd.value != confirm_pwd.value) {
    pwd.classList.add("error");
    confirm_pwd.classList.add("error");
    pwd.setCustomValidity("Passwords do not match");
  } else {
    pwd.classList.remove("error");
    confirm_pwd.classList.remove("error");
    pwd.setCustomValidity("");
  }
}

pwd.addEventListener("input", validatePasswords);
confirm_pwd.addEventListener("input", validatePasswords);
