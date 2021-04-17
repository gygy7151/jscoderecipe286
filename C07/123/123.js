// 스크롤 분량에 따라 요소의 표시를 지연시키고 싶을때

// scroll 이벤트는 대상 요소의 스크롤 작업 실행시 발생
// window객체에서 사용
// 세로는 window.scrollY, 가로는 window.scrollX로 확인 가능
// 스크롤 분량에 따라 처리를 구분할때 유용

// 스크롤시 문구와 함께 좌표가 출력
window.addEventListener('scroll', () => {
    console.log('스크롤 작업', window.scrollX, window.scrollY);
});

