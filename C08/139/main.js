// foo 요소
document.getElementsByClassName('box');

const boxList = document.getElementsByClassName('box');
const boxLength = boxList.length;


for (let index = 0; index < boxLength; index++) {
    // 각 box 요소 출력
    console.log(boxList[index]);
}