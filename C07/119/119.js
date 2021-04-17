// 마우스 움직임에 따라 이미지에 애니메이션 효과를 주고 싶을 때
// 마우스 움직임에 따라 작업을 처리하고 싶을 때

// 마우스의 움직임과 관련된 세세한 조작은 클릭 이벤트만으로 부족
// 마우스 클릭 시점과 떼는 시점 움직이는 시점과 관련된 기능의 이벤트 확인

// mousedonw : 마우스 버튼을 누르는 시점
// mouseup : 마우스 버튼을 떼는 시점
// mousemove :  마우스를 움직이는 시점


// 마우스 이벤트의 정보를 가져오고 싶은 DOM 요소에 각각 이벤트를 설정
// main 클래스 지정 요소(조작영역)에서 마우스 움직임에 따라 로그를 출력하는 샘플 확인

// 조작 영역
// 이벤트 요소로 id를 부를땐 앞에 #을 붙여줘야 되고, 클래스인경우 '.'을 붙여주면 된다. 작은따옴표 반드시**
const logArea = document.querySelector('#log2');

// 대상 영역에서 마우스 버튼을 누르면 로그를 출력
logArea.addEventListener('mousedown', () => {
    logArea.innerHTML =  `마우스 클릭 이벤트 발생`;
});

// 대상 영역에서 마우스 버튼을 떼면 로그를 출력
logArea.addEventListener('mouseup', () => {
    logArea.innerHTML = `마우스 버튼을 떼는 이벤트 발생`;
});


// 대상 영역에서 마우스를 움직이면 출력
logArea.addEventListener('mousemove', () => {
    logArea.innerHTML = `마우스 이동 이벤트 발생`;
})