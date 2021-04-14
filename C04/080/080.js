// 비정의 데이터 처리
// 값이 없는 변수의 처리

// js에서 undefined와 null은 원시타입
// undefined는 브라우저에 정의되지 않은 데이터를 다루는 아래의 상황에 발생
// 1. 변수에 데이터를 대입하지 않는다
// 2. 객체의 속성에 값을 대입하지 않는다
// 3. 파라미터에 값을 전달하지 않는다

let a;
console.log(a); // undefined

const object = {};
console.log(object.b); // undefined

function myFunction(c) {
    console.log(`b의 값은 ${c}`);
}
myFunction();   // 'b의 값은 undefined' 가 출력
