// 마우스 휠의 기능을 무효화 하고 싶을때
// 터치 기능을 무효화하고 싶을 때

//preventDefault()를 사용해 기본 이벤트 작동해지 가능

// 마우스 휠 기능 무효화 하기
document.querySelector('.foo').addEventListener('wheel', (event) => {
    event.preventDefault();
});

// 터치 기능 무효화하기
document.documentElement.addEventListener('touchstart', (event) => {
    event.preventDefault();
});
