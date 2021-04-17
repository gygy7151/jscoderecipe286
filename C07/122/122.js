// 마우스의 클릭 위치를 확인하고 싶을 때
// 마우스의 움직임에 따라 요소를 반응시키고 싶을 때

// click 이벤트와 mousemove 이벤트등 마우스 조작 이벤트는 MouseEvent의 객체를 통해 이루어짐
// MouseEvent 객체는 이벤트 발생시점의 좌표정보가 포함
// 기준위치에 대한 몇가지 속성 가짐
// clickX, clickY, offsetX, offsetY ㅡ등.

// PageX, pageY는 페이지 스크롤 분량의 정보 포함
// screenX, screenY는 웹페이지를 보고 있는 디바이스의 좌측 위 기준

// 각속성 확인 방법
// 마우스 이동시 좌표 출력
// targetBox.addEventListener('mousemove', (event) => {
//     console.log(event.clientX, event.clientY);
// });

/**캐릭터 이미지 */
const character = document.querySelector('.character');

// 화면에서 마우스 클릭 시 캐릭터 이동 시작
document.addEventListener('mousedown', () => {
    // 마우스 움직임에 따라 캐릭터를 이동
    document.addEventListener('mousedown', onMouseMove);

    // 화면에서 마우스 클릭을 떼면 캐릭터 이동이 멈춤
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    });
});

/**
 * 마우스 움직임에 따른 처리
 */
function onMouseMove(event) {
    character.style.left = `${event.clientX - 100}px`;
    character.style.top = `${event.clientY - 100}px`;
}