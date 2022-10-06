const idInput = document.getElementById("login-input-id");
const pwInput = document.getElementById("login-input-pw");
const loginButton = document.getElementsByClassName("login-button")[0];

let idValue = "";
let pwValue = "";

idInput.addEventListener("input", (e) => {
  idValue = e.target.value;
  console.log(idValue, pwValue);
  console.log(loginButton.disabled);
  console.log(loginButton.style);

  if (idValue !== "" && pwValue !== "") {
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.style.cursor = "not-allowed";
  }
});

pwInput.addEventListener("input", (e) => {
  pwValue = e.target.value;

  if (idValue !== "" && pwValue !== "") {
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.style.cursor = "not-allowed";
  }
});
