// 유저 정보 배열에서 18세 이상인 유저의 정보만을 가져와 배열을 생성하고 싶을때
// Syntax
// 배열.filter(콜백함수) : 콜백함수 조건을 만족하는 데이터의 배열 생성
// -> 배열 반환

// filter()는 콜백함수 조건에 만족하는 요소들을 새로운 배열로 생성


// [10, 20, 30, 40] 배열에서 30 이상의 수를 가져와 배열을 생성 코드
// 콜백함수는 요소value가 30이상인지 확인
const newArray = [10, 20, 30, 40].filter((value) => value >= 30);

console.log(newArray);  //결과 :  [30, 40]

//30이상이면 true반환하고 새로운 배열의 요소가 된다
const newArray = [10, 20, 30, 40].filter((value) => {
    return value >= 30;
});
const newArray = [10, 20, 30, 40].filter(function(value) {
    return value >= 30;
});



