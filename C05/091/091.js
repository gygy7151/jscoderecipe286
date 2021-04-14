// 데이터 통신 시간을 확인하고 싶을 때
// js의 처리시간을 확인하고 싶을 때

// Date 객체로 시간의 차이를 계산가능
// 측정 시작 시점에 Date.now()를 사용해 절대시간 계산 가능
// 측정이 끝나는 시점에 다시 Date.now()를 사용하여 두값을 빼면
// 밀리초 단위의 경과시간 계산가능
// 알아보기 쉬운 초단위 변환은 1000으로 나누고 소수점을 처리
// 초(second) 단위 변환하기
const sec = Math.floor(diff / 1000);

// 스크립트 시작 지점의 기록
const oldTime = Date.now();

setInterval(() => {
    const currentTime = Date.now();
    
    // 경과한 밀리초 가져오기
    const diff = currentTime - oldTime;

    // 초(second) 단위 변환하기
    const sec = Math.floor(diff / 1000);

    // HTML에 문자열 넣기
    document.querySelector('#log').innerHTML = `${sec}초 경과`;
}, 1000);
