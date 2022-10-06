const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementById("loginBtn");

//버튼 활성화시키는 함수 ableBtn
function ableBtn() {
  //만약 inInput에 값이 존재하고 pwInput에도 값이 존재하면
  if (idInput.value && pwInput.value) {
    //로그인 버튼 disabled 속성 제거
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.style.cursor = "pointer";

    //idInput에 값이 없거나 또는 pwInput에 값이 없다면
  } else if (!idInput.value || !pwInput.value) {
    //로그인 버튼 disabled 속성 추가
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.style.cursor = "default";
  }
}

//idInput에서 키보드로 값을 입력 후 떼면 ableBtn 함수 실행
idInput.addEventListener("keyup", ableBtn);

//pwInput에서 키보드로 값을 입력 후 떼면 ableBtn 함수 실행
pwInput.addEventListener("keyup", ableBtn);
