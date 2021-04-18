// 입력된 키에 따라 처리를 분류하고 싶을 때

// keyboardEvent 객체의 속성을 확인시 입력된 키 값 확인 가능
// keydown, keyup 이벤트와 함께 사용됨

//**텍스트 영역 */
const textarea = document.querySelector('.textarea');

textarea.addEventListener('keyup', (event) => {
    // 입력 'a'에 대한 결과 출력
    console.log(event.key); // 'a'
    console.log(event.code);    // 'keyA'
    console.log(event.altKey);  // fasle
    console.log(event.ctrlKey);     // false
    console.log(event.shiftKey);    // false
    console.log(event.metaKey); // false
    console.log(event.repeat);  // false
    console.log(event.isComposing);     // false
})

// 입력된 키의 확인은 키의 코드 값을 사용
window.addEventListener('keydown', handleKeyDown);

function handleKeydown(event) {
    // 키 코드 값 확인
    const keyCode = event.keyCode;
    // 조건문으로 제어
    if (keyCode === 39) {
        // 우측화살표 키
        console.log('키가 입력됨');
    }
    if (keyCode === 37) {
        // 좌측화살표 키
        console.log('키가 입력됨');
    }

    if (keyCode === 38) {
        // 상향키
        console.log('키가 입력됨');
    }
    if (keyCode === 40) {
        // 하향키
        console.log('키가 입력됨');
    }
}