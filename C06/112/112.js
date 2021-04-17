// 오프라인 화면에 네트워크 연결 상태를 표시하고 싶을 때
// navigator.onLine 속성을 사용 네트워크 상태 확인가능

// 접속 상태 확인
const isOnline = navigator.onLine;
// 반환값이 true인 경우 네트워크 온라인 상태임.
// 해당 속성은 읽기만 가능
// 브라우저 네트워크 상황을 감시하여 오프라인 상태일 때 화면에 해당 상태를 표시하는 기능드에 사용가능
if (isOnline === true) {
    console.log('온라인 상태입니다.');
} else {
    console.log('오프라인 상태입니다.');
}

// 온라인 상태가 되면 실행되는 이벤트
window.addEventListener('online', () => {
    document.querySelector('#log').innerHTML = '온라인 상태입니다.'
});

// 오프라인 상태가 되면 실행되는 이벤트
window.addEventListener('offline', () => {
    document.querySelector('#log').innerHTML = '오프라인 상태입니다.'
});

