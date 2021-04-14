//두 날짜의 차이를 구하고 싶을 때
// 비교하고 싶은 날짜와 시간을 Data 인스턴스에 넣고
// getTime()을 사용하여 밀리초를 구한다
// 밀리초는 js에서 가장 간단한 시간 단위로 두 날짜의 밀리초를 계산하여 차이를 구한다
// 계산 후 알아보기 쉬운 단위 변환이 필요함**
// 일수 day는 결괏값을 '24*60*60*1000'으로 나누면 확인가능

const dateA = new Date('2020/06/01');
const dateB = new Date('2020/05/01');
const diffMSec = dateA.getTime() - dateB.getTime();
const diffDate = diffMSec / (24 * 60 * 60 * 1000);
console.log(`날짜의 차이는 ${diffDate}일입니다.`);  // 결과: '날짜의 차이는 31일입니다.'

//시간hour 단위로 확인하고 싶은 경우 결괎값을 '60*60*1000'으로 나눈다.
const dateA = new Date('2020/06/01 10:00:00');
const dateB = new Date('2020/06/01 07:00:00');
const diffMSec = dateA.getTime() - dateB.getTime();
const diffHour = diffMSec / (60 * 60 * 1000);
console.log(`시간의 차이는 ${diffHour}시간입니다.`);    // 결과: '시간의 차이는 3시간입니다.'

//분minute 단위 확인은 '60 * 1000'으로 나눈다.
const dateA = new Date('2020/06/01 01:10:00');
const dateB = new Date('2020/06/01 00:50:00');
const diffMSect = dateA.getTime() - dateB.getTime();
const diffMin = diffMSec / (60 * 1000);
console.log(`시간의 차이는 ${diffMin}시간입니다.`);     //결과: ' 시간의 차이는 20분입니다.'