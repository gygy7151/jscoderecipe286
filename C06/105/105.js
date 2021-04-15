// 해시값이 변경될때마다 작업을 처리하고 싶을 때

//URL의 #(해시)가 변경될 때마다 작업처리시 window 객체의 hashchange 이벤트를 확인
// #(해시)가 변경되는 타이밍은 아래와 같다

// 페이지 내 앵커 링크를 클릭할 때
// 브라우저의 '뒤로 가기', '앞으로 가기' 버튼을 눌렀을 때
// 유저가 URL의 해시를 변경할 때

// 페이지 내 앵커 링크를 만들어 각각 '현재 앵커는 #apple입니다', '현재 앵커는 #orange입니다.'로 전환이 가능한 샘플 구현 코드
// 주소창에 #apple #orange가 포함됨

// 해시 변경 이벤트 감시
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
    // 변경 후의 해시값
    const hash = location.hash;
    document.querySelector('.log').innerHTML = `현재 앵커는    ${hash}입니다.`;

}

const btn = document.querySelector('button');

//버튼 클릭시 작업
btn.addEventListener('click', (event) => {
    // 새로고침
    location.reload(true);
    // 알림창 표시
    alert('좋은 새벽입니다. 새로고침 완료되었습니다:)');
});
