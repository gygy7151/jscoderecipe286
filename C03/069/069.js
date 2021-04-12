// 데이터를 복사하고 싶을 때
const object1  = {
    result: true,
    members: [
        { id: 1, name: '여우' },
        { id: 2, name: '호랑이' },
        { id: 3, name: '사자'}
    ]
};

// 객체를 복사
const copiedObject1 = Object.assign({}, object1);

//Object.assign()과 스프레드 연산자를 사용하면 얇은 복사임
// 얇은 복사란, 복사전 데이터와 복사후의 데이터가 같은 곳을 참조하기 때문에, 복사전의 데이터를 수정하면 복사후의 데이터에도 영향을 미침

console.log(copiedObject1);
// 객체가 복사됨
// {
//      result: true,
//      members: [
//          { id: 1, name: '여우'},
//          { id: 2, name: '사자'},
//          { id: 3, name: '토끼'}
// ]
//}

// 스프레드 연산자'...'를 사용하면 더 간략하게 만들 수 있음
const object2 = {
    result: true,
    members: [
         { id: 1, name: '여우'},
         { id: 2, name: '사자'},
         { id: 3, name: '토끼'}
    ]
};

// 객체를 복사
const copiedObject2 = { ...object2 };

console.log(copiedObjecgt2);    // 객체가 복사됨

//얇은 복사 대표사례 :스프레드 연산자를 사용해 객체복사
// 복사 전(previous) 객체
const object3  = {
    id: 1,
    members: [ '사자', '토끼', '거북이']
};

// 객체의 복사
const copiedObject3 = { ...object3 };

// 복사 전 객체 members 속성의 배열을 수정
object3.members[0] = 'john';

// 복사 된 members 속성의 배열도 영향을 받음
console.log(copiedObject3.members[0]);  // 결과: 'John'


 


