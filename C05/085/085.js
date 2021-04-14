// 요일 표시하고 싶을 때
// 날짜 정보에서 요일을 확인하고 싶을 때

// Date 객체 getDay()는 요일 정보를 가져온다. 날짜 정보를 가져오는 getDate()와 비슷해 헷갈리기 쉬움
// 반환값이 숫자이므로 변환이 필요하다. 0은 일요일, 6은 토요일을 나타낸다

// 일~토까지 해당하는 문자열을 배열에 넣고 getDay()의 반환값에 따라 배열에서 해당요일을 가져온다.
const date = new Date();
const day = date.getDay();
const dayList = ['일', '월', '화', '수', '목', '금', '토'];
const label = dayList[day];

// HTML에 표시
document.querySelector('#log').innerHTML = `오늘은 ${label}요일입니다.`;

// 영문 표기
const date = new Date();
const day = date.getDay();
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const label = dayList[day];
