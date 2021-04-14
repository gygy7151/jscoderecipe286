// 날짜와 시간을 설정하고 싶을 때

// Date 인스턴스에 날짜 설정가능
// 생성자 constructor를 사용하는 법
// 날짜와 시간 정보를 생성자의 인수로 전달
const date1 = new Date('2020/12/28 20:01:10');
const date2 = new Date('Mon Dec 28 2020 20:01:10');
// 숫자로도 지정 가능
// 숫자는 년, 월,일,시 분, 초, 밀리초의 순서로 기입
// 월은 0~11범위에서 사용
const date3 = new Date(2020, 12, 28, 20, 1 , 10);

// 타임 스탬프 사용가능 1970년부터 경과한 밀리초 나타내는데
// getTime()사용해 현재 타임스탬프 가져오기 가능
const date4 = new Date(1528801270000);

//메소드 객체 사용하는 법
const date = new Date();
// 날짜설정
date.setFullYear(2021);
date.setMonth(0);
date.setDate(1);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

//HTML에 문자열 넣기
document.querySelector('#log').innerHTML = date.toLocaleString();
