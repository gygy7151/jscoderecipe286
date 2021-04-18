// 문자를 입력할 때마다 작업을 실행하고 싶을 때

// keydonw, keyup, keypress 키 입력을 감시하는 이벤트
// 각각의 이벤트 발생시점은 다름

document.querySelector('.textarea').addEventListener('keydown', () => {
    console.log('키가 눌러졌습니다.');
});

document.querySelector('.textarea').addEventListener('keypress', () => {
    console.log('문자가 입력되었습니다.');
});

document.querySelector('.textarea').addEventListener('keyup', () => {
    console.log('키 눌림이 해제되었습니다.');
})
