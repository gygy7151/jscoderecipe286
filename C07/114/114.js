// 이벤트의 함수를 지정하고 싶을 때

// addEventListener()를 사용해 이벤트의 함수를 지정
// 이벤트 발생시 실행하는 이벤트의 함수는 다음과 같이 다양한 방법으로 기술 가능
// 이벤트타깃.addEventListener(이벤트명, 리스너, [옵션*]) / 이벤트 리스너 설정 / 변환값 없음


// 요소의 참조 정보 가져오기
// 여기서 '.'뒤에 button은 html 태그의 클래스명이다.
const button = document.querySelector('.button');

// 화살표 함수 사용하기 <방법1>
button.addEventListener('click', () => {
    console.log('버튼 클릭 이벤트가 발생하였습니다.');
});


// function 선언을 사용하기 <방법2>
// button.addEventListener('click', function() {
//     console.log('버튼 클릭 이벤트가 발생하였습니다.');
// });

// 함수명 지정하기
button.addEventListener('click', onClickButton);

function onClickButton() {
    console.log('버튼 클릭 이벤트가 발생하였습니다.');
}
// 화살표 함수는 this를 고정할 수 있다는 장점을 가짐
// 이 책의 샘플은 주로 화살표 함수를 사용하여 이벤트 리스너를 구현


// 아래 내용은 콘솔창에 직접 입력해야됨.
// 이벤트 정보 가져오기
button.addEventListener('click', (event) => {
    // 이벤트 정보 출력
    console.log(event);
});

// 이벤트 정보(이벤트 객체)는 발생한 이벤트에 따라 MouseEvent나
// KeyboardEvent 등 다양한 종류가 있음
// 이벤트 객체는 이벤트가 발생한 요소와 참조 정보, 입력된 키 등의 정보를 포함
// 발생한 요소는 target 속성을 이용해 확인 가능
button.addEventListener('click', (event) => {
    // 클릭한 버튼의 요소(html 코드내용) 출력
    console.log(event.target);
});
