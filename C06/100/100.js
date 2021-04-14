// 데스크탑과 모바일 브라우저에 따라 처리를 구분하고 싶을 때
const isSupported = !! (
    'ontouchstart' in window || // iOS & 안드로이드
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
); // IE 11+

// window 객체의 터치 이벤트를 감시하는 핸들러 ontouchstart를 사용해 ios와 안드로이드 단말기 확인 가능
// windows용 터치 디바이스 확인은 pointerEnabled 속성을 사용
// 추가로 maxTouchPoints의 값이 0 이상인 경우에도 터치 조작이 가능함

