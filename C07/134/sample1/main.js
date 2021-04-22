// 드래그 앤 드롭 기능 사용 파일처리

// 로그를 통해 각 이벤트의 발생확인
// drag이벤트 : 드래그 중인 상태 발생하는 이벤트임 주의
const character = document.querySelector('.character');

character.addEventListener('dragstart', () => {
    console.log()
});

character.addEventListener('drag', () => {
    console.log('drag이벤트');
});

character.addEventListener('dragend', () => {
    console.log('dragend 이벤트');
});



