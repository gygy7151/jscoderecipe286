// 텍스트 선택 시점에 작업을 처리하고 싶을 때
// 텍스트 선택 시점의 작업을 무효화 하고 싶을 때

// selectstart 이벤트는 텍스트의 선택 시점에 발생
// document.querySelector('.paragraph').addEventListener('selectstart', () => {
//      console.log('텍스트가 선택되었습니다.');
//  });

// 말풍선요소
const ballon = document.querySelector('#balloon');

// 대상 문자열 요소
const paragraph = document.querySelector('.paragraph');

// 선택 작업 시 처리
paragraph.addEventListener('selectstart', () => {
    // 클릭 해제 시 처리
    paragraph.addEventListener(
        'mouseup',
        (event) => {
            // 선택한 문자열 가져오기*
            const selectionCharacters = window.getSelection().toString();

            if (selectionCharacters.length > 0) {
                // 한 글자 이상인 경우 문자를 표시
                balloon.innerHTML = selectionCharacters;
                balloon.classList.add('on');
                balloon.style.left =
                    `${event.clientX - balloon.clientWidth / 2}px`;
                balloon.style.top =
                    `${event.clientY - balloon.clientHEight * 2}px`;
            } else {
                // 선택된 문자열이 없으면 말풍선 닫기
                removePopup();
            }
        },
        {
            once: true
        }
    );
});

// 말풍선 클릭 시 닫기
balloon.addEventListener('click', removePopup);

// 말풍선 닫기 처리
function removePopup() {
    balloon.classList.remove('on');
}