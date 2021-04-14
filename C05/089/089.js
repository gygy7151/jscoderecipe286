// 하루 뒤의 날짜를 알고 싶을 때
// 달을 넘겨 계산하고 싶을 때

const date = new Date('2020/06/01');
date.setMonth(date.getMonth()-1);   // 1개월전
console.log(date.toLocaleDateString()); // 결과: '2020.5.1.'
date.setDate(date.getDate() + 60);  // 60일 후
console.log(date.toLocaleDateString()); // 결과: '2020.6.30/'
