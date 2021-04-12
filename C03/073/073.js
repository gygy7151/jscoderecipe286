// 객체의 깊은 계층까지 수정을 제한하고 싶을 때

//Object.freeze(객체) : 객체의 수정을 제한 -> 객체 반환
//Object.is.Frozen(객체) : 객체의 수정 제한 확인 -> 진릿값

// 객체는 const도 속성의 추가, 삭제 변경이 가능하다

const boject = { id: 10, name: '사자'};
Object.id = 12; //속성 변경 가능
object1.address = '서울'; // 속성추가 기능

// 속성의 추가, 삭제, 변경의 제한은 Object.freeze()를 사용
// 오류 검사 설정은 'use strict*'를 사용

'use strict';

const object2 = { id: 10, name: '사자'};
Object.freeze(object2);

object2.id = 12; // 속성을 변경할 수 없으므로 에러
object2.address = '서울';       // 속성을 추가할 수 없어서 에러

// 배열의 수정도 제한이 가능
'use strict';

const array1 = [1, 2, 3];
Object.freeze(array1);
array1.push(4);     // 속성을 변경할 수 없으므로 에러


// 객체의 수정제한 확인은 Object.is.Frozoen()을 사용함
'user strict';

const object2 = { id: 10, name: '사자' };
Object.freeze(object2);

console.log(Object.isFrozen(obeject2)); // 결과ㅣ true

// 객체 수정을 제한하는 다른 방법
// Object.seal(), Object.preventExtensions()가 있음
// Object.seal(): 속성의 추가와 삭제 제한, 변경만 가능
// Object.preventExtensions(): 속서의 추가 제한, 되도 삭제와 변경만 가능. 수정은 불가..
