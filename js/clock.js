// h2의 id가 clock 인 태그 호출
const clock = document.querySelector("h2#clock");
const clockSetting = document.querySelector(".clock-setting");
const clockSection = document.getElementById("clock-section");

//시계 함수 생성
function getClock() {
  // 로컬 현재 날짜 저장
  const date = new Date();
  // 현재 날짜에서 시간 표시할 방식 저장
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // 화면 줄일경우 초 단위 삭제 되게끔 변수 생성
  const width = window.innerWidth;
  if (width < 600) {
    clock.innerText = `${hours}:${minutes}`;
  } else {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

// 시계 설정 화면 변수
const clockEventHandler = {
  mouseOver: function () {
    clockSetting.classList.remove("hidden");
  },
  mouseLeave: function () {
    clockSetting.classList.add("hidden");
  },
};

// 시계 설정 이벤트 추가
clockSection.addEventListener("mouseenter", clockEventHandler.mouseOver);
clockSection.addEventListener("mouseleave", clockEventHandler.mouseLeave);
window.addEventListener("resize", getClock);

// 시계 실행 및 새로고침 주기
getClock();
setInterval(getClock, 1000);
