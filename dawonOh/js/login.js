const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementById("loginBtn");

function useBtn() {
  loginBtn.disabled = false;
  loginBtn.style.backgroundColor = "#0095F6";
  loginBtn.style.cursor = "pointer";
}

function notUseBtn() {
  loginBtn.disabled = true;
  loginBtn.style.backgroundColor = "#c4e1fb";
  loginBtn.style.cursor = "default";
}

//아이디 유효성검사
function checkId() {
  let result = idInput.value.includes("@");
  return result;
}

//비밀번호 유효성검사
function checkPw() {
  if (pwInput.value.length > 5) {
    return true;
  } else {
    return false;
  }
}

//버튼 활성화시키는 함수 ableBtn
function ableBtn() {
  if (idInput.value && pwInput.value && checkId() && checkPw()) {
    useBtn();
  } else {
    notUseBtn();
  }
}

//idInput에서 키보드로 값을 입력 후 떼면 ableBtn 함수 실행
idInput.addEventListener("keyup", ableBtn);

//pwInput에서 키보드로 값을 입력 후 떼면 ableBtn 함수 실행
pwInput.addEventListener("keyup", ableBtn);
