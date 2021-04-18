// 마우스 움직임에 따라 작업을 처리하고 싶을 때
// 터치에 반응하는 요소를 처리하고 싶을 때

// 마우스와 달리 터치는 멀티(동시 터치)가 가능
// 멀티터치는 이벤트가 동시에 발생 -> 이벤트 동시에 작동
// event.changedTouches를 사용 각 터치 정보에 엑세스 가능

const box = document.querySelector('.box');
box.addEventListener('touchstart', (event) => {
    // 터치 정보 리스트
    console.log(event.changedTouches);
})

// event.changedTouches는 터치 정보(Touch객체)를 배열요소로 가짐
// 인덱스 0부터 정보가 순서대로 들어감
// pageX, pageY 속서을 터치 위치의 확인 가능
// 각 터치 이벤트 좌표 출력 샘플 확인 가능

// 터치 영역
const targetBox = document.querySelector('.box');
// 로그
const log = document.querySelector('.log');

// 화면의 터치 위치 변경 시 로그 표시
targetBox.addEventListener('touchmove', () => {
    const touch = event.changedTouches;

    log.innnerHTML = `
    ${touch[0].pageX.toFixed(2)}<br>
    ${touch[0].pageY.toFixed(2)}
`;
});