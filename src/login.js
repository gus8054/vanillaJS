function setElementHidden() {
  // const loginForm = document.querySelector(".login-form");
  loginForm.classList.toggle("hidden");
  const toggleBox = document.querySelector(".toggle-box");
  toggleBox.classList.toggle("hidden");
}
function loginBtnClick(event) {
  loginFormInput = loginForm.querySelector(".login-form__input");
  const invalidResult = loginFormInput.checkValidity();
  if (invalidResult) {
    //   로컬스토리지에 username저장
    const username = loginFormInput.value;
    localStorage.setItem(USERNAME, username);
    const usertitle = document.querySelector(".user");
    usertitle.innerText = `${username}의 오늘 할 일들`;
    setElementHidden();
    // 나머지 기본동작 임의로 중지
    event.preventDefault();
  }
}
function logoutBtnClick(event) {
  localStorage.removeItem(USERNAME);
  setElementHidden();
  // 나머지 기본동작 임의로 중지
  event.preventDefault();
}

const USERNAME = "username";
const loginForm = document.querySelector(".login-form");
const loginFormBtn = loginForm.querySelector(".login-form__btn");
const logoutBtn = document.querySelector(".logout");
loginFormBtn.addEventListener("click", loginBtnClick);
logoutBtn.addEventListener("click", logoutBtnClick);
