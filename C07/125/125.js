// 스마트폰에서 화면 터치에 반응하는 처리를 하고 싶을 때

// touchstart : 터치 시작 시점
// touchmove : 터치 포인트를 움직이는 시점
// touchend : 터치 종료 시점

// 터치 가능 디바이스는 시작, 이동, 종료의 터치 이벤트가 발생
// 터치 이벤트를 감지하여 로그로 출력하는 샘플

// 터치 이벤트 확인용 box
const targetBox = document.querySelector('.box');
// 로그 출력 영역
const logArea = document.querySelector('.log');

// 터치 시작 시 영역에 로그 표시
targetBox.addEventListener('touchstart', () => {
    logArea.innerHTML = `터치 시작`;
});

// 터치 위치 이동 시 영역에 로그 표시
targetBox.addEventListener('touchmove', () => {
    logArea.innerHTML = `터치 위치 이동`;
});

// 터치 종료시 영역에 로그 표시
targetBox.addEventListener('touched', () => {
    logArea.innerHTML = `터치 종료`;
});

// 서버에 업로드 후 터치 가능한 디바이스로 확인 또는 브라우저의 터치 시뮬레이터 기능 사용 확인
// 터치 이벤트의 로그 출력 확인 가능