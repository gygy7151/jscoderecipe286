//. box 요소 모두 가져오기
const boxList = document.querySelectorAll('.box');
boxList.forEach((targetBox) => {
  // 각 박스 요소 출력
  console.log(targetBox);
});

const boxList = document.querySelectorAll('.box');
const boxLength = boxList.length;

for (let index = 0; index < boxLength; index++) {
  // 각 박스요소 출력
  console.log(boxList[index]);
}

// 각 .ㅠㅐㅌ
  