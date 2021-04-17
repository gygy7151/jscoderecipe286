// 전체화면으로 콘텐츠를 표시하고 싶을 때
// 동영상을 전체화면으로 재생하고 싶을 때
// 이어지는 콘텐츠를 표시하고 싶을 때

// 전체화면전환은 requestFullScreen()을 사용한다.
// 동영상이나 프레젠테이션 콘텐츠를 전체 화면으로 표시할 때 유용하다
// 브라우저에서 해당 메소드가 지원되지 않는 경우 별도의 메소드로 브라우저를 명시하여 사용

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    // 전체 화면 전환
    myREquestFullScreen(document.body);
});

function myRequestFullScreen(element) {
    if (element.requestFullscreen) {
        // standard specs
        element.requestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        // safari, chrome
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        // firefox
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        // internet explorer 11_ (IT 11+)
        element.msREquestFullscreen();
    }
}

// 전체화면 해제는 전달 인수없이 document 메소드 사용
// 브라우저에 따라 지원되지 않는 경우
// requestFullscreen()과 같이 브라우저를 명시하여 사용한다.

const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (event) => {
    // 전체 화면 해제
    myCancelFullScreen();
});

function myCancelFullScreen() {
    if (document.exitFullscreen) {
        // standdard
        document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
        // safari, chrome
        document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        // firefox
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        // internet explorer 11+ (IE 11+)
        document.msExitFullscreen();
    }
}

