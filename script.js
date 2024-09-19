console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "test";

const h2 = document.querySelector("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

const h3 = document.querySelector("h3");
// console.log(h3.innerText.length);
const h3_text = h3.innerText;

//h3 문자열을 0위치에서부터 50번째 위치까지 짜른 뒤
//짜른 문자열을 다시 h3 innerText 프로퍼티에 대입해서 적용
// h3.innerText = h3_text.substring(0, 50); //자르고 싶은 위치

//미션
//조건문을 활용해서 h3에 들어가는 문자값이 50글자가 안되면 해당 문자를 그대로 출력하고 50글자가 넘어가면 50글자까지 자른 뒤 그 뒤에 ... 말줄임표 추가

/*
내가 한거
document.addEventListener("DOMContentLoaded", function () {
  const h3 = document.querySelector("h3");
  const h3Text = h3.textContent;

  if (h3Text.length > 50) {
    h3.textContent = h3Text.slice(0, 50) + "...";
  }
});
*/

//강사님이한거
/*
if (h3_text.length > 30) {
  h3.innerText = h3_text.substring(0, 30) + "...";
} else {
  h3.innerText = h3_text;
}
*/

/*
if (h3_text.length > 30) h3.innerText = h3_text.substring(0, 30) + "...";
else h3.innerText = h3_text;
*/

h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;
//미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징

shortenText("h1", 5);
shortenText("h2", 5);
shortenText("h3", 20);
function shortenText(elem, len) {
  //첫 번째 인수로 받은 문자값으로 DOM요소 선택
  const el = document.querySelector(elem);
  //해당 요소의 문자값 변수에 할당
  const el_text = el.innerText;
  //해당 돔요소에 innerText 프로퍼티에 대입되는 우항을 3항연산자로 연산 처리후 대입
  el.innerText =
    el_text.length > len ? el_text.substring(0, len) + "..." : el_text;
}
