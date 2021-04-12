// 객체의 속성을 변경하고 싶을때

// {} : 객체를 초기화
// {키: 값, 키: 값, ..} : 객체를 초기화
// 객체[] : 값을 가져오기
// 객체.키 : 값을 가져오기
// 객체[키] = 값 : 값을 변경하기
// 객체.키 = 값 : 값을 변경하기

// 넣고 싶은 데이터를 {}로 감싸서 객체를 정의
// 데이터 타입 무제한 but key를 사용해 데이터 호출 및 값 변경 가능

const object = {}; // 빈 객체

// 개인의 정보 데이터 객체
const person = {
    id: 1,
    name: '거북이',
    age: 28
};

// 값 확인하기
console.log(person.id);     // 결과: 1
console.log(person['name']);    // 결과: 거북이

// 값의 변경
person.id = 2;
person['name'] = '사자';
console.log(person.id);     // 결과: 2
console.log(person['name']);       // 결과: 사자

// 존재 하지 않는 속성을 불러오면 undefined 반환
const object2 = {};

object2.foo;        // undefined

// 객체의 속성은 다차원 데이터 저장 가능 -> '[키]'와 '.키'를 사용해 불러오기와 변경이 가능함
// API의 response데이터를 다루는 객체
const response = {
    result:  true,
    list: [{ id: 1, name: '호랑이', age: 26},
            { id: 2, name: '거북이', age: 32}]
};

// 데이터 확인
console.log(response.list[0].name);         // 결과: 호랑이

// 값의 변경
response.list[1].age = 51;
console.log(response.list[1].age);      // 결과: 51

// 함수 타입도 저장가능
// 클래스 데이터 객체
const myClass = {
    method1: function() {
        console.log('메소드1실행');
    },
    method2: () => {
        console.log('메소드2실행');
    }
};

myClass.method2();  // "메소드2실행" 출력




