// 데이터 종류에 따라 처리를 구분하고 싶을 때

// instanceof는 데이터가 객체의 인스턴스인지를 확인하는 연산자다
// 함수를 정의할 때 특정 인스턴스만 구분하여 처리가능

const today = new Date();

console.log(today instanceof Date);     // 결과: true
console.log(tomorrow instanceof Date);      // 결과: Uncaught ReferenceError: Tomorrow is not defined
console.log(today instanceof Array);       // 결과: false

// Date 인스턴스가 전달되면 날짜를 출력하는 함수
// instanceof는 데이터 종류에 따라 처리 구분가능하여 유용
function showCurrentDate(argument) {
    if (argument instanceof Date) { //Date가 객체인거구 :)
        console.log(`현재는 ${argument.toLocaleDateString()}입니다.`);
    } else {
        console.log('적절한 데이터 타입이 아닙니다.');
    }
 }

 const today = new Date();
 const myArray = [1, 2, 3];

 showCurrentDate(today);        // 결과: 2020/09/30(현재 시각 출력) today가 데이터인거임
 showCurrentDate(myArray);      // 결과: 적절한 데이터 타입이 아닙니다. myArray가 데이터 인거임

 // instanceof는 자신이 정의한 클래스의 인스턴스 판별에도 사용가능
 // -> 즉 객체말고도 클래스 함수 판별도 가능하대 대박..
 class myClass1 { }
 class myClass2 { }

 const myInstance1 = new myClass1();
 const myInstance2 = new myClass2();

 console.log(myInstance1 instanceof MyClass1 );
 // 결과: true
 console.log(myInstance2 instanceof MyClass1 );
 // 결과: false
 



