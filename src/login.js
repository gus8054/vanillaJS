function loginBtnClick(event) {
  loginFormInput = loginForm.querySelector(".login-form__input");
  const invalidResult = loginFormInput.checkValidity();
  if (invalidResult) {
    //   로컬스토리지에 username저장
    const username = loginFormInput.value;
    localStorage.setItem(USERNAME, username);
    // 로그인폼 없애기
    loginForm.classList.toggle("hidden");
    // 로그아웃 버튼 생기기
    logoutBtn.classList.toggle("hidden");
    // 나머지 기본동작 임의로 중지
    event.preventDefault();
  }
}
function logoutBtnClick(event) {
  localStorage.removeItem(USERNAME);
  // 로그인폼 생기기
  loginForm.classList.toggle("hidden");
  // 로그아웃 버튼 없애기
  logoutBtn.classList.toggle("hidden");
  // 나머지 기본동작 임의로 중지
  event.preventDefault();
}
const USERNAME = "username";
const loginForm = document.querySelector(".login-form");
const loginFormBtn = loginForm.querySelector(".login-form__btn");
const logoutBtn = document.querySelector(".logout");
loginFormBtn.addEventListener("click", loginBtnClick);
logoutBtn.addEventListener("click", logoutBtnClick);
