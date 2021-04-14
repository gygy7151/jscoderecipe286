// 올해 데이터를 불러오고 싶을 때

// Date 객체의 getFullYear()는 당해 연도 네 자릿수를 반환
// new Date()로 인스턴스화하여 연도 호출 가능
const date = new Date();
const year = date.getFullYear(); //    연도


// HTML에 표시
document.querySelector('#log').innerHTML = `지금은 ${year}년 입니다.`;
