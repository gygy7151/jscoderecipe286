// DOM 엑세스 타이밍에 처리 실행
window.addEventListener('DOMContentLoaded', () => {
    // .box 요소 개수 가져오기
    const boxNum = document.querySelectorAll('.box').length;
    // 로그 출력
    console.log(`.box 요소의 개수는 ${boxNum}입니다.`);
});

// document.querySelevtorAll()은 셀렉터와 일치하는 모든 요소를 가져옴
const boxNum = document.querySelectorAll('.box').length;

// '0'이 출력
console.log(`.box 요소의 개수는 ${boxNum}입니다.`);

// window.addEventListener('DOMContentLoaded', () => {})를 사용하지 않는 경우 확인
// HTML의 head 태그안에 script 태그가 존재하는 경우
// .box요소의 로딩보다 자바스크립트가 먼저 실행되어 버림
// document.querySelectorAll('.box')를 사용해도 .box를 가져올 수 없다.
// 로그의 결관는 0이 출력된다

// document.querySelevtorAll('.box')는 undefined가 된다
const boxNum = document.querySelectorAll('.box').length;
// '0'이 출력
console.log(`.box 요소의 개수는 ${boxNum}입니다.`);
// load 이벤트는 페이지 내 모든 리소스(사진, 사운드, 동영상 등)의 로딩이 완료된 후 발생
// DOMContentLoaded보다 시점이 느림
// 페이지가 표시되는 시점에 요소를 조작시 DOMContentLoaded를 사용


