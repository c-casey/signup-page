const pword = document.getElementById("pword");
const confirm_pwd = document.getElementById("confirm-pwd");

pword.addEventListener("input", (event) => {
  if (pword.value != confirm_pwd.value) {
    pword.classList.add("error");
    confirm_pwd.classList.add("error");
    pword.setCustomValidity("Passwords do not match");
  } else {
    pword.classList.remove("error");
    confirm_pwd.classList.remove("error");
    pword.setCustomValidity("");
  }
});

confirm_pwd.addEventListener("input", (event) => {
  if (pword.value != confirm_pwd.value) {
    pword.classList.add("error");
    confirm_pwd.classList.add("error");
    pword.setCustomValidity("Passwords do not match");
  } else {
    pword.classList.remove("error");
    confirm_pwd.classList.remove("error");
    pword.setCustomValidity("");
  }
});
