// 현재 페이지를 그대로 둔 채로 새로운 윈도우 창을 열고 싶을때

// 새로운 윈도우 창을 열기 위해서는 window.open()을 사용
// 인수에 URL을 전달
// 새로운 창이 기존 창보다 뒤에서 열리지 않도록 focus()를 사용해 액티브 처리함
// focus()는 a 태그의 target="_blank" 속성과 비슷함
// window.open()의 반환값 참조를 응용하여 페이지간에 데이터 주고 받는 작업도 가능
const win  = window.open('another.html');
win.focus();