// 로그인 폼 호출
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 자주 쓰이는 생성자 저장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 폼 제출시 발생하는 함수
function onLoginSubmit(event) {
  // 폼 제출시 새로고침 되는 상황 차단
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 제출한 폼을 브라우저 db에 저장
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  // 화면에 출력하는 함수 호출
  paintGreetings(username);
}

// 폼 제출후 나타나는 출력
function paintGreetings(username) {
  const date = new Date();
  const hours = date.getHours();

  // 시간 별 출력 화면
  if (hours >= 4 && hours < 12) {
    greeting.innerText = `Good mornig, ${username}`;
  } else if (hours >= 12 && hours < 6) {
    greeting.innerText = `Have a nice day, ${username}`;
  } else {
    greeting.innerText = `Good evening, ${username}`;
  }
  // 제출시 항상 실행될수 있도록 조건문 밖으로..
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 브라우저 db에 저장된 데이터 호출
const savedUsername = localStorage.getItem(USERNAME_KEY);

// db에 저장된게 있는지 확인
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
