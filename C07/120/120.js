// 마우스 오버 작업을 처리하고 싶을 때

// mouseenter : 포인팅 디바이스가 요소의 위치에 있을 때
// mouseleave : 포인팅 디바이스가 요소를 벗어날 때

// mouseenter와 mouseleave이벤트는 포인팅 디바이스(마우스, 터치 패드 등)가 요소위에 있거나 벗어날때 발생하는 이벤트

// document.querySelector('.box').addEventListener('mouseenter', () => {
//     console.log('포인팅 디바이스가 .box 요소 위에 있음');
// });

// document.querySelector('.box').addEventListener('mouseleave', () => {
//     console.log('포인팅 디바이스가 .box 요소를 벗어남');
// });
//.box요소와 .inner요소에 마우스를 올리면 로그가 출력됨

const logArea = document.querySelector('#log');

// querySelector에선 document앞에 logArea는 오면 에러뜸.
document.querySelector('.box').addEventListener('mouseenter', () => {
    logArea.innerHTML = `. box요소 위치에 마우스가 있음`;
    log('.box요소 위치에 마우스가 있음')
});

document.querySelector('.inner').addEventListener('mouseenter', () => {
    logArea.innerHTML = `.inner요소 위치에 마우스가 있음`;
    log('.inner요소 위치에 마우스가 있음')
});

function log(message) {
    console.log(message);
}