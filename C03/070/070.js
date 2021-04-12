// API respose의 특정 데이터를 확인하고 싶을 때
// 지정한 데이터가 객체에 존재하지 않아 처리 작업을 쉬소하고 싶을 때

 // 개인의 정보 데티터 객체
 const userData = {
     id: 1,
     name: '사자',
     age: 26
 };

 console.log(userData.hasOwnProperty('id'));    // 결과:  true
 console.log(userData.hasOwnProperty('address'));   // 결과: false
 console.log('id' in userData);         // 결과: true

 //Sytax
 // 객체.hasOWnProperty(키) : 데이터 유무 확인 : 진릿값
 // 키 in 객체 : 데이터의 유무 여부 반환

// 객체의 데이터를 가져와 undefined나 null의 여부를확인하는 방법
// 개인 정보 데이터 객체
const userData = {
    id: 1,
    name: '사자',
    age: 26
};

console.log(userData.id != null);    // 결과:  true
console.log(userData.address != null);   // 결과: false
console.log(userData['id'] != null);         // 결과: true

