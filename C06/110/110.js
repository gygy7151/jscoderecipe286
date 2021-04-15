// 페이지의 포커스 유무를 확인하고 싶을 때
// 페이지의 포커스가 맞쳐줘 있을 때만 음악을 재생하고 싶을 때

// 해당 페이지의 포커스 상태여부는 이벤트를 통해 확인 가능
// focus이벤트는 포커스가 맞춰졌을때 발생하는 이벤트
// blur는 그 반대의 이벤트임
// 예를 들면 웹에서 BGM을 재생하고 싶을 때 focus와 blur를 사용하여 재생과 정지 가능

window.addEventListener('focus', () => {
    document.querySelector('#log').innerHTML = '포커스 상태';
});

window.addEventListener('blur', () => {
    document.querySelector('#log').innerHTML = '포커스를 벗어난 상태';
});

