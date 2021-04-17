// 이벤트를 1회만 실행하고 싶을 때

// addEventListener()의 세 번째 인수에 옵션을 지정 가능
// 반드시 모든 옵션을 설정한 필요는 없음.
// 이벤트를 1회만 실행하고자 할 경우 once를 true로 설정

// 옵션 지정
const option = {
    once: true
};

document
    .querySelector('.button')
    .addEventListener('click', onClickButton, option);

function onClickButton() {
    alert('버튼 클릭 이벤트가 발생하였습니다.');
}