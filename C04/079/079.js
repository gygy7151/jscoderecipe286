// 숫자를 문자열로 변환하고 싶을 때
// 문자열을 숫자로 변환하고 싶을 때

// 숫자 100과 문자열 '200'의 덧셈 계산을 하려면 먼저 문자열을 숫자타입으로 변환해야 한다
// Number()를 사용해 타입변환 후 덧셈을 계산하는 코드 예시
const result = 100 + Number('200');
console.log(result);   // 결과: 300

//타입의 변환 예시
//Boolean(), String()등의 메소드를 활용 데이터 타입변환 -> 명시형 변환
Boolean(1); // true
Boolean(0); // false
Boolean('사자'); // true
Boolean(''); //  false

String(1);  // "1"

Number('1');    // 1
Number('');     // 0
Number('사자');     // NaN
Number(true);   // 1
Number(false);      // 0

// 암시형 변환
// 데이터 타입이 자동으로 변환되는 것 <-> 명시형 변환
console.log(100 + '200');  //100200
console.log('200' - 100 ); // 100
console.log(1 == '1'); // true -> 숫자 1이 문자열 타입으로 변환됨


// 변수의 동적 타입 변환
// js의 데이터는 문자열, 숫자, 진릿값등 타입이 필수요소
// js는 동적 타입변환을 하는 언어로, 다음코드에서 에러 미발생
let a = 10; // a는 숫자타입
a = '사자' // a가 문자열 타입으로 변환


