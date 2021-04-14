// 화면을 브라우저 크기에 맞춰 표시하고 싶을 때
// 화면 폭에 맞춰 처리 작업과 레이아웃을 변경하고 싶을 때

// 브라우저의 표시영역 크기를 윈도우 사이즈라고 명함
// 윈도우 창이 표시되는 사이즈는 innerWidth와 innerHeight를 사용해 가져오기 가능
// 사이즈 값은 주소창, 북마크, 개발자 도구등 주변의 인터페이스는 포함되지 않은 순수한 화면의 사이즈임

// 화면의 가로와 세로의 길이를 알게되면 다양한 작업이 가능해짐
// 동영상을 전체 화면으로 표시하거나, 스크롤 속도에 따라 화면의 반응을 조절하는 작업임
// 다음의 샘플과 같은 스크립트가 사용되며, 단위는 px다

// window 객체를 참조하는 범위는 전역이므로 .window를 생략해도 무관
// 속성은 읽기 전용이므로 수정 불가

// 화면의 가로길이
const w = window.innerWidth;
// 화면의 세로길이
const h = window.innerHeight;

window.addEventListener('resize', resizeHandler);

function resizeHandler (event) {
    // 새로운 화면의 가로 길이
    const w = innerWidth;
    // 새로운 화면의 세로 길이
    const h = innerHeight;

    document.querySelector('.value-width').innerHTML = 
    `가로 길이는 ${w}px입니다.`;
    document.querySelector('.value-height').innerHTML = 
    `세로 길이는 ${h}px입니다.`;
}