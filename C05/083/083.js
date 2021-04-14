// 현재 날짜를 화면에 표시
// 날짜를 기준으로 처리를 구분

// Date 객체의 getMonth()는 월, getDate()는 일의 정보를 가져옴
// getMonth()의 반환값은 0부터 시작함
// 0은 1월을 나타냄
// +1 처리후 정확한 결과 얻기 가능
// getDate()는 가공없이 반환값 그대로 사용가능

const date = new Date();
const month = date.getMonth() + 1 ; //월
const day = date.getDate(); //일
const label = `${month}월${day}일`;     //날짜 표시

//HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `오늘은 ${label}입니다ㅏ.`;

