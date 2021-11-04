const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const container = document.querySelector("body .container");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LOGIN_CLASSNAME = "login";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  ////
  container2.classList.remove(HIDDEN_CLASSNAME);
  container3.classList.remove(HIDDEN_CLASSNAME);
  container.classList.add(LOGIN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Good Day👍${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  //////
  container2.classList.add(HIDDEN_CLASSNAME);
  container3.classList.add(HIDDEN_CLASSNAME);
  container.classList.remove(LOGIN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //////
  container2.classList.remove(HIDDEN_CLASSNAME);
  container3.classList.remove(HIDDEN_CLASSNAME);
  container.classList.add(LOGIN_CLASSNAME);
  paintGreetings(savedUsername);
}
