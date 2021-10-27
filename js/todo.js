// 투두 폼 호출
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// 투두 저장할 배열 선언
let toDos = [];

// 저장되는 데이터를 String형으로 변환하여 저장(정확힌 JSON형식으로 변환)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 투두 제거 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // 필터를 사용해서 조건에 맞지않는 값만 다시 뱉어낸다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 뱉어낸 값을 다시 저장
  saveToDos();
}

// 화면에 출력하는 함수
function paintToDo(newTodo) {
  // li 태그 생성
  const li = document.createElement("li");
  li.id = newTodo.id;

  // span 태그 생성
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  // 버튼 생성
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  // 만들어낸 태그들을 맞는 위치에 상속시킨다.
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 폼 제출시 발생 함수
function handleToDoSubmit(event) {
  // 폼 제출 새로고침 방지
  event.preventDefault();
  // 폼 제출 변수 저장
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // 제출한 데이터를 객체 형식으로 저장
  const newTodoObj = {
    text: newTodo,
    // id의 Date.now는 단지 시간별로 고유한 값이 나오므로 사용
    id: Date.now(),
  };
  // 만든 객체를 배열에 저장
  toDos.push(newTodoObj);
  // 객체 를 화면에 출력
  paintToDo(newTodoObj);
  // 출력한 객체 저장
  saveToDos();
}

// 제출 이벤트 생성
toDoForm.addEventListener("submit", handleToDoSubmit);
// db에 저장된 데이터 호출
const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약 투두 db에 저장된 값이 있을경우
if (savedToDos !== null) {
  // db에 저장된 string형식을 자바스크립트에서 이해할 수 있도록 변환
  const parsedToDos = JSON.parse(savedToDos);
  // 투두 배열에 변환한 값을 저장
  toDos = parsedToDos;
  // 변환한 값을 각각 화면에 뿌려주도록 각각에 대해 출력함수 실행
  parsedToDos.forEach(paintToDo);
}
