// 간단히 날짜 정보 출력 원할때
// 언어별 날짜 표시 형식으로 출력하고 싶을때

// 한국어 환경에서는 '년/월/일' 순
// 영어 환경에서는 '월/일/년' 순

const date = new Date();

const locale = date.toLocaleString(); // 예: '2020.03.01 오후 10:22:01'
const localeDate = date.toLocaleDateString();   // 예: '2020.03.01.'
const localeTime = date.toLocaleTimeString();   // 예: '오후 10:31:34'

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `${locale}<br />
    ${localeDate}<br />
    ${localeTime}`;
    
