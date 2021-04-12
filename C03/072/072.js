// 객체의 데이터를 정리하여 대입하고 싶을때
// 객체의 일부 데이터를 추출 사용 원할때
// {변수1, 변수2,...} = 객체 :  객체 데이터를 각 변수에 대입

// 키를 추출하여 변수에 분할대입하는 방법
const userData1 = {
    id: 1,
    name: '사자',
    age: 26
};

const { id, name, age } = userData1l

console.log(id);    // 결과 : 1(userData.id 값)
console.log(name);  // 결과 : 사자(userData.name 값)
console.log(age);   // 결과 : 26(userData.age 값)

//변수의 정의순서와 객체의 키의 순서는 무상관

const userData2 = {
    id: 1,
    name: '사자',
    age: 26
};


const { id, name, age } = userData2;

console.log(address); // 결과: undefined

//기존키 값을 새로운 변수에 대입가능
const userData3 = {
    id: 1,
    name: '사자'
};

// name 키의 값을 myName에 대입
const { name: myName } = userData3;

console.log(myName);  // 결과: '사자'(userData3.name값)



