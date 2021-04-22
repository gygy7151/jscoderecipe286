// 자바스크립트에서 html 요소 다루고 싶을때
// html 각 요소에 접근하는 방식은 DOM Document Object Model 인터페이스로 정의되어 있음
// DOM은 트리 구조를 사용하여 HTML 문서를 다룸
/// 트리의 각 구성요소를 'node'노드라고 함 또는 '마디'
/// node객체로 취급하여 요소를 가져오거나 추가하는 작업이 가능
/// node 객체의 속성과 메소드는 '노드,속성'과 '노드,메소드'로 접근이 가능
/// HTML문서 전체의 요소는 document를 사용해 가져올 수 있음 = 이 자체가 커다란 Node객체가 됨

// Node 객체의 querySelector() 메소드
// 셀렉터 일치 요소 가져오기
document.querySelector('.box');

// 노드는 3가지 종류가 있음
// 요소노드 : <p class="container">안녕</p>
// 속성노드 : class="container"
// 텍스트노드 : 안녕하세요.

// 요소노드는 js에선 element객체로 취급
// 요소의 데이터 변경 또는 CSS클래스 변경 가능

// .box 요소 가져오기
const myBox = document.querySelector('.box');


// .box 요소의 데이터 변경
myBox.innerHTML = '안녕하세요';

// Element객체는 Node 객체를 계승
// 계승은 부모 객체의 성징 그대로 이어받는 것
 
