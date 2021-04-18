// 윈도우 창의 크기에 따라 처리를 분류하고 싶을 때
// 레이아웃의 크기를 조정하고 싶을 때

// resize 브라우저 윈도우 창의 사이즈 변환 시점

window.addEventListener('resize', () => {
    console.log('윈도우 창이 리사이징되었습니다.');
});

/** 가로 길이를 표시하는 요소 */
const widthLog = document.querySelector('#widthLog');
/** 세로 길이를 표시하는 요소 */
const heightLog = document.querySelector('#heightLog');

// 윈도우 사이즈가 변경될 때마다 처리 실행
window.addEventListener('resize', () => {
    widthLog.addEventListener('resize', () => {
        widthLog.innerText = `${window.innerWidth}px`;
        heightLog.innerText = `${window.innerHeight}px`;
    });
})

// resize 이벤트의 부하문제 처리하기
// resize이벤트는 윈도우 창의 사이즈가 1px만 변해도 발생
// 무거운 작업을 지속적으로 수행시 부하가 생겨 시스템에 영향줌
// 문제 해결 방법으로 타이머를 사용하여 1초이상 사이즈 변화가 없을시 작업 실행하도록 설정

// 1초후 처리 실행 타이머
let resizeTimer;

window.addEventListener('resize', () => {
    // resizeTimer 실행중인 경우 타이머 해제
    if (resizeTimer != null) {
        clearTimeout(resizeTimer);
    }

    // 1000밀리초 후 onResize() 실행
    resizeTimer = setTimeout(() => {
        onResize();
    }, 1000);
});

// 처리 작업
function onResize() {}
// 상황에 따라 matchMedia()와 DOM 사이즈의 변경을 감시하는 Resize Observer로 대체가능

