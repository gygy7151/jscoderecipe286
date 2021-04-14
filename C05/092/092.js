// 제한시간을 지정하여 카운트다운 하고 싶을 때

// 시간의 차이를 계산하여 카운트다운을 만들기
// setInterval()은 지정한 밀리초마다 함수 실행
// 목표시간과 경과 시간의 차를 구하여 카운트 다운 처리

const totalTime = 10000;    // 10초
const oldTime = Date.now();

const timerId = setInterval(() =>  {
    const currentTime = Date.now();
    // 시간의 차를 구함
    const diff = currentTime - oldTime;

    // 남은 밀리초 계산
    const remainMSec = totalTime - diff;
    // 밀리초를 정수의 초 단위로 변환
    const remainSec = Math.ceil(remainMSec / 1000);

    let label = `남은 시간 ${remainSec}초`;

    //0초 이하의 처리 작업
    if (remainMSec <= 0) {
        // 타이머를 종료
        clearInterval(timerId);

    // 타이머 종료를 표시
    label = '종료';
    }

    // 화면에 표시
    document.querySelector('#log').innerHTML = label;

}, 1000);


