// 알림창을 표시하고 싶을 때
// 동기 형식으로 유저에게 메시지를 표시하고 싶을 때

// alert()은 메시지내용과 OK버튼으로 이루어진 알림 경고창을 표시
// 창이 닫히기 전까지 js가 실행중인 상태로 유지
// OK버튼을 눌러 창을 닫기 전까진 다른 작업이나 브라우저의 조작이 불가능
// 알림창 메시지 내용의 줄바꿈은 \n과 템플릿 문자열 사용

//버튼 참조
const btn = document.querySelector('button');

//버튼 클릭시 작업
btn.addEventListener('click', (event) => {
    // 알림창 표시
    alert('안녕하세요! \n좋은 하루 보내세요.');
});

// windo 객체의 메소드
// alert()은 window 객체 메소드다
// window 객체를 참조하는 범위는 전역
// window.를 생략해도 상관없음

//알림창 표시
window.alert('안녕하세요.');

//알림창 표시
alert('안녕하세요. ');

