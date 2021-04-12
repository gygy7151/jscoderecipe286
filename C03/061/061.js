// 요소를 추출하여 새로운 배열을 만들고 싶을때
// 배열 요소 전체에 대한 처리 작업을 하고 싶을때
// ID와 이름을 가지는 객체 배열에서 ID만 가지는 배열을 새로 만들고 싶을때

//Syntax
// 배열.map(콜백함수)
// -> 콜백함수로 새로운 배열 생성
// -> 배열 반환

//Syntax- 콜백함수
//([요소*],[인덱스*],[기존배열*]) => 변경후요소
// 요소를 받아 변경후 반환


const idList = [4, 10, 20];

//idList배열의 요소데이터는 value임
const userIdList = idList.map((value) => `userid_${value}`);
console.log(userIdList);  // 결과: ["userid_4", "userid_10", "userid_20"]


//콜백함수는 요소데이터 외에도 기존 배열 및 인덱스를 인수로 받을 수 있음
const idList = [3, 8, 12];

//여기서 index는 userIdList의 인덱스값이다(0부터 시작함)
const userIdList = idList.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList); //결과: ["userid_1_3", "userid_2_8", "userid_3_12"]

//id와 이름을 가지는 객체배열에서 Id만 가지는 배열을 작성하는 샘플
const apiResponseData = [
    { id: 10, name: '곰'},
    { id: 21, name: '사자'},
    { id: 31, name: '여우'},
];

const idList = apiResponseData.map((value) => value.id);
// 다음과 같이 작성도 가능
// const idList = apiResponseData.map(value => {
//  return value.id
//});

console.log(idList); //결과: [10, 21, 31]



