// 대소문자 구분없이 알파벳순으로 정렬하고 싶을때
// 메소드 : 문자열1.localeCompare(문자열2)
// 의미 : 문자열1과 문자열2 비교
// 반환: 숫자


// 비교함수 없이 정렬
const arr1 = ['grape', 'Orange', 'apple'];
arr1.sort();

//문자코드는 대소문자의 분류가 따로 되어 있어서 Orange가 먼저 앞으로 온다
console.log(arr1); // 결과: ['Orange', 'apple', 'grape']


// 비교 함수에 localeCompare를 사용
const arr2 = ['grape', 'Orange', 'apple'];
arr2.sort((a, b) => a.localeCompare(b));
console.log(arr2);      // 결과: ['apple', 'grape', 'Orange']

// 배열 sort()에서 문자열의 순서비교는 localeCompare()를 사용한다.
// 문자코드는 대소문자의 분류가 따로 되어 있기때문에 유니코드등을 사용하면 의도한대로 정렬불가

