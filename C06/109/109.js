// 타이틀을 동적으로 변환하고 싶을때
// 읽지 않은 메시지 건수를 타이틀 바에 표시 원할때

// document.title속성으로 페이지 타이틀 정보를 가져올 수 있고, 읽기와 쓰기 모두 가능
// 속성 읽기란? 현재 페이지의 주소를 가져오는것을 의미함
// 속성 쓰기란? 해당 페이지로 이동하는 작업실행을 의미함

//읽기 작업
const title = document.title;

//쓰기 작업
document.title = '타이틀 내용';

document.querySelector('#btnApple').addEventListener('click', () => {
    document.title = '사과';
})

document.querySelector('#btnOrange').addEventListener('click', () => {
    document.title = '오렌지';
})

// 페이지 타이틀은 속성에 문자열 대입시 변경가능
// 채팅앱에서 읽지 않은 메시지의 수를 타이틀에 표시할 때 유용함
