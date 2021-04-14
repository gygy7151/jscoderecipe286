// 데이터 타입을 확인하고 싶을 때
// 데이터 타입에 따라 처리 작업을 지정하고 싶을 때

// typeof는 데이터 타입을 확인하는 연산자다
// 타입 정보의 문자열 비교가 가능하므로 자바스크립트의 타입 판별에 사용 가능

// typeof를 사용한 각 타입의 확인 결과
console.log(typeof true);   // 결과: 'boolean'
console.log(typeof 10);     // 결과: 'number'
console.log(typeof '사자');     // 결과: 'string'
console.log(typeof null);       // 결과: 'object'
console.log(typeof undefined);   // 결과: 'undefined'
console.log(typeof [1, 2, 3]);     // 결과: 'object'
console.log(typeof { id: 10, name: '호랑이' });     // 결과: 'object'
console.log(typeof Symbol());       // 결과: 'symbole'
console.log(
    typeof function() {
        console.log('test');
    }
);  // 결과: 'function'


console.log(typeof class MyClass {});   // 결과: 'function'
