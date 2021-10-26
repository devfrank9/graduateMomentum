//로컬에서 이미지 불러오기
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
//이미지에 랜덤 변수 할당
const chosenImage = images[Math.floor(Math.random() * images.length)];
//html 태그 불러오기
const bg = document.querySelector("body");

//이미지 삽입
bg.style.backgroundImage = `url(img/${chosenImage})`;
