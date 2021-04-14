// a 태그 이외의 방법으로 페이지를 이동하고 싶을때

// location.href 속성에 URL문자열 대입
// 대입한 타이밍에 맞춰 페이지 이동이 이루어짐
// 상대경로는 현재 페이지의 URL주소가 기준점이 됨
// 읽기는 현재 페이지 주소를 가져오고 쓰기는 해당페이지로 이동하는 작업

// 읽기 작업
console.log(location.href); // 결과:현재페이지의 URL

// 쓰기 작업
location.href = 'another.html'; // 해당 페이지 이동

