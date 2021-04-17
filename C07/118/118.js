// 버튼 클릭 시 작업을 처리하고 싶을 때

// click 이벤트는 요소를 탭하거나 클릭시 발생
// 다음과 같이 버튼 요소에 click이벤트 설정
// 이 click이벤트 버튼 외에 div, a요소, 임의의 html요소에 사용 가능

document.querySelector('.button').addEventListener('click', () => {
    alert('버튼 클릭 이벤트 발생');
});
