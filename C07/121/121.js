// 마우스 오버 작업을 처리하고 싶을 때

//mouseover와 mouseout 이벤트는 포인팅 디바이스(마우스,터치패드)가 요소위에 벗어날때 발생하는 이벤트
//mouseenter, mouseleave와 달리 이벤트 버블링이 발생
// 버블링이란? 자식 요소에 발생한 이벤트가 부모요소까지 전달되는 것
// 자식요소에서 발생한 이벤트가 부모요소에서도 발생하여 부모요소 리스너도 함깨 실행됨

document.querySelector('.box').addEventListener('mouseover', () => {
    console.log('포인팅 디바이스가 .box 요소 위에 있음');
});

document.querySelector('.box').addEventListener('mouseout', () => {
    console.log('포인팅 디바이스가 .box요소를 벗어남');
});