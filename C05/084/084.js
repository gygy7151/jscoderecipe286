// 현재 시각 불러오고 싶을 때
// 시간을 디지털 형식으로 표시하고 싶을 때

// getHours()는 0~23의 정수, getMinutes(), getSecond()는 0~59의 정수를 반환
// 24: 00 의 경우 getHours()의 반환값은 24가 아닌 0임 

const date = new Date();
const hour = date.getHours(); // 시간
const minutes = date.getMinutes();  // 분
const seconds = date.getSeconds();  // 초

const label = `${hour}시${minutes}분${seconds}`;

//HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `지금은 ${label}입니다.`;


//'오전 3시'나 '오후10시'와 같이 오전/오후를 넣고 싶을 때 조건문 사용
// 12를 기준으로 처리 구분

const date = new Date();
const hour = date.getHours();
let meridiem; // 오전, 오후 구분
let hour2;  //  시간
if (hour < 12) {
    meridiem = '오전';
    hour2 = hour;
} else {
    meridiem = '오후';
    hour2 = hour - 12;
}

const label = `${meridiem}${hour2}시`;

// HTML에 문자열 넣기
document.querySelector('#log').innerHTML = `지금은 ${label}입니다.`;


