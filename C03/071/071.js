// API response 데이터 확인하고 싶을때
// Syntax
// Object.keys(객체) : 객체 간 키의 배열 ->  배열 반환
// Object.values(객체) : 객체 간 데이터의 배열 -> 배열 반환
// Object.entries(객체) : 객체 간 속성(key, Value)의 배열 -> 배열 반환

//객체간 속성property의 루프 처리방법
//해당 메소들 통해, 키, 데이터, 속성 나열 배열 생성가능

const userData = {
    id: 1,
    name: '사자',
    age: 26
};

// 키를 기준으로 루프 처리
console.log(Object.keys(userData)); // 결과: [ 'id', 'name', 'age']

// 데이터를 기준으로 루프 처리
console.log(Object.values(userData));   // 결과: [ 1, '사자', 26]

// 속성을 기준으로 루프 처리
console.log(Object.entries(userData));
// 결과: [ [ 'id', 1], ['name', '사자'], ['age', 26]]
