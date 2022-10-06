const inputIdById = document.getElementById("id_input");
const inputPwById = document.getElementById("pw_input");
const loginBtnById = document.getElementById("login_btn");

function activate() {
    if (inputIdById.value && inputPwById.value) {
        loginBtnById.disabled = false;
        loginBtnById.style.backgroundColor="#0095F6"
    } else {
        loginBtnById.disabled = true;
    }
}

inputIdById.addEventListener("keyup", activate);
inputPwById.addEventListener("keyup", activate);
loginBtnById.addEventListener("keyup", activate);