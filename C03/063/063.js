// 3개의 값을 가지는 배열
const priceList = [100, 500, 900];

// 합계를 저장하는 변수
const sum = priceList.reduce((previous, current) => {
    return previous + current;
});

// 다음과 같이 생략 가능
// const sum = priceList.reduce((previous, current) => previous + current);

console.log(sum);  // 결과: 1500


//For문을 활용해 reduce()와 같은 방식 처리 가능
// 3개의 값을 가지는 배열
const priceList = [100, 500, 900];

// 합계를 저장하는 변수
let sum = 0;

// 루프 처리를 사용한 계산
for (const price of priceList) {
    sum += price;
}

console.log(sum); // 결과: 1500

//2차 배열을 1차배열로 만드는 플래트닝Flattening에도 사용가능

const array = [['바나나', '사과', '딸기'], ['귤', '포도']];

const flatArray = array.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
});

console.log(flatArray); // 결과: ["바나나", "사과", "딸기", "귤", "포도"]

//reduce() 요소의 처리 작업이 좌->우로 이루어지며, reduceRight()는 우에서 좌 순서.
const array = ['사자', '여우', '호랑이']

const members1 = array.reduce((previous, current) => {
    return `${previous}와 ${current}`;
});
console.log(members1); // 결과: "사자와 여우와 호랑이"

const members2 = array.reduceRight((previous, current) => {
    return `${previous}와 ${current}`;
});
console.log(members2);      // 결과: "호랑이와 여우와 사자"


