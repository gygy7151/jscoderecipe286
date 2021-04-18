// 사이즈를 벗어난 화면을 처리하고 싶을 때
// 스마트폰의 가로, 세로, 화면 전환시 작업 처리

const mediaQueryList = matchMedia('(min-width: 500px)');
console.log(mediaQueryList);

// 출력결과
// {
//     matches: true,  // 윈도우 창의 크기가 500px 이상일때
//     media: '(min-width: 500px)'
// }
// matches속성을 사용시 브라우저 윈도우 창의 크기와 미디어 쿼리의 일치여부 확인 가능

// 윈도우 창의 크기가 300px 이하이면 true
matchMedia('(max-width: 300px').matches;

// 윈도우 창의 크기가 100px 이상 700px이하라면 true
matchMedia('(min-width: 100px) and (max-width: 700px)').matches;

// 스마트폰으로 가로, 세로 전환 확인 등 쿼리 변화시점에 따라 처리작업 원할시
// callback 처리 활용. 콜백처리는 미디어 쿼리의 상태변화에 따라 실행

// (orientation:portrait) 가로 전환 대기
const mediaQueryList = matchMedia('(orientation: portrait)');

mediaQueryList.addListener(() => {
    console.log('디바이스 화면의 방향이 전환되었습니다.');
});

// 콜백처리는 MediaQueryList를 가져옴

