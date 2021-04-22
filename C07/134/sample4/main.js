// 파일 업로드 영역
const fileZone = document.querySelector('.file-zone');

// 파일 업로드 영역에 사용하는 클래스
const className = 'on';

// 드롭 요소가 중복된 경우 처리
fileZone.addEventListener('dragover', (event) => {
    // 기본 이벤트 작동 해지
    event.preventDefault();
    fileZone.classList.add(className);
});

// 드래그가 요소를 벗어날 경우 처리
fileZone.addEventListener('dragleave', () => {
    //기본 이벤트 작동 해지
    event.preventDefault();
    fileZone.classList.remove(className);
});


// 드롭 처리
fileZone.addEventListener('drop', (event) => {
    // 기본 이벤트 작동 해지
    event.preventDefault();
    fileZone.classList.remove(className);

    // file 객체 참조
    const transferdFiles = event.dataTransfer.files;

    // 이미지 표시
    displayImages(transferdFiles);

});

//* 이미지 표시 처리 */
function 