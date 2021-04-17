// 유저의 조작에 따라 이벤트를 실행하고 싶을 때

// 웹사이트는 클릭, 탭, 스크롤, 화면 불러오기, JSON읽어오기 등 다양한 이벤트 존재
// 자바스크립트는 클릭, 탭 등의 동작에 따른 이벤트 처리가능
// addEventListener()를 사용해 제어

// .button 요소를 클릭시 알림창을 표시하는 이벤트를 처리
const button = document.querySelector('.button');
button.addEventListener('click', onClickButton);

function onClickButton() {
    console.log('클릭 이벤트가 발생하였습니다.');
}
// button요소는 클릭, 탭 등 다양한 이벤트가 발생
// 이런 이벤트를 발생시키는 객체를 '이벤트'타깃이라고 명명
// window, div 요소, p요소 등 이벤트 타깃임
// 앞의 경우 click이 이벤트이며 유저 조작관련 다양한 종류 존재
// 타깃의 이벤트 처리를 '이벤트 리스너'라고 함 => 모두 addEventListener()와 관련있음
button.addEventListener('click', (event) => {
    // 이벤트 정보 출력
    console.log(event);
});

// 이벤트 정보(이벤트 객체)는 발생한 이벤트에 따라 MouseEvent나
// KeyboardEvent 등 다양한 종류가 있음
// 이벤트 객체는 이벤트가 발생한 요소와 참조 정보, 입력된 키 등의 정보를 포함
// 발생한 요소는 target 속성을 이용해 확인 가능
button.addEventListener('click', (event) => {
    // 클릭한 버튼의 요소 출력
    console.log(event.target);
});