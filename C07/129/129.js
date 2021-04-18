// 브라우저 탭 비활성화(백그라운드화)시 시스템에 부하를 주는 작업 멈추고 싶을때
// 스마트폰 슬립 모드에 브라우저 복귀 시점 작업 처리하고 싶을 때

// visibilitychange 이벤트는 브라우저 탭의 콘텐츠가 표시/비표시(백그라운드화)변경이 일어날때 발생
// document 요소에 이벤트 설정
// 요소 표시 상태를 나타내는 document.visibilityState를 함께 사용
// 상태에 다른 처리 분류
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('콘텐츠 표시 상태');
        return;
    }

    if (document.visibilityState === 'hidden') {
        console.log('콘텐츠 비활성화(백그라운드화)상태');
    }
})