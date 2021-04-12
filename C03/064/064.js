//문자열과 유사배열 ArrayLike를 배열로 변환하고 싶을때
//반복 가능한 객체를 배열반환

// div 요소를 전부 불러오기
const allDivElementList = document.querySelectorAll('div');

// div 요소의 수를 출력
console.log(allDivElementList.length);

// 세번째 div 요소 출력(인덱스가 부여된 요소)
console.log(allDivElementList[2]);

//NodeList는 유사배열이지만 배열은 아님
// 배열에서 사용 가능한 filter()등의 메소드는 여기서 사용불가
// <div class="on"></div> 요소를 찾기 위해 filter()를 사용하면
// NodeList에서는 filter()를 사용할 수 없으므로 에러가 발생함
allDivElementList.filter((element) => element.classList.contains('on'));

//스프레드 연산자(...)를 사용하여 유사 배열객체를 배열로 변환가능
// 유사배열의 특징은 length속성으로 크기 확인가능, 인덱스가 부여된 요소가짐

const allDiveElementList = document.querySelectorAll('div');

//배열로 변환
const elementsArray = [...allDivElementList];

//배열용 메소드인 filter() 사용 가능
elementsArray.filter((element) => element.classList.contains('on'));

//문자열도 length와 인덱스로 접근이 가능하기에 유사배열임
const myString = '안녕하세요';

console.log(myString.length);       // 결과: 5
console.log(myString[2]);           // 결과: "하"

//문자열도 [...문자열]을 사용해 배열로 변환 가능
const myString = '안녕하세요';

console.log(...myString);     // 결과: ["안", "녕", "하", "세", "요"]


//유사배열은 Array.from()을 사용한 변환도 가능
//Arrary.from()도 스프레드 연산자와(...)와 같이 유사배열ArrayLike을 배열로 변환가능
//콜백함수를 지정해 map()메소드와 같이 새로운 배열 생성가능
const myString = '안녕하세요';

console.log(Array.from(myString));  //결과: ["안", "녕", "하", "세", "요"

// 콜백 함수로 새로운 배열 생성 가능
// 문자열마다 '!'를 추가
const newArray = Array.from(myString, (character) => `${character}!`);
console.log(newArray);      // 결과: ["안!", "녕!", "하!", "세!", "요!"]

// 스프레드 연산자(...)도 map()을 사용가능
// 브라우저 호환성 문제만 없으면 스프레드 연산자 사용해 간단작업 가능
const myString = '안녕하세요';
// 콜백 함수로 새로운 배열 생성 가능
// 문자열마다 '!'를 추가
const newArray = [...myString].map((character) => `${character}!`);
console.log(newArray); // 결과: ["안!", "녕!", "하!", "세!", "요!"]

//콜백함수 문법
//([요소*], [인댁스*], [기존배열*]) => {}


