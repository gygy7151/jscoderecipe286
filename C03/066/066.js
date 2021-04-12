// 게임에서 요소의 값을 섞을때

//배열을 빠르고 고르게 섞기위해 피셔 예이츠알고리즘 활용됨
const array = [1, 2, 3, 4, 5];

const arrayLength = array.length;

//피셔 예이츠 알고리즘
for (let i = arrayLength - 1; i >=0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] =  [array[randomIndex], array[i]];
}

console.log(array);     // 결과: [4, 5, 1, 2, 3]

//재사용할수 있도록 처리 작업 함수 만들기
//배열을 섞는 shuffleArray()함수에서 구현됨
//숫자배열과 문자열 배열의 셔플구현 예시코드
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1);     // 결과: [5, 1, 8, 3, ... (생략)]

const array2 = ['사자', '여우', '곰', '호랑이', '기린'];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2);         // 결과: ["기린", "사자", "곰", "여우", "호랑이"]

/**
 * 배열 셔플
 * 기존 배열 변경없이 새로운 배열 반환
 * @param sourceArr 기존배열
 * @returns 셔플된 배열
 */

function shuffleArray(sourceArr) {
    // 기존 배열의 복제 생성
    const array = sourceArr.concat();
    // 피셔 예이츠 알고리즘
    const arrayLength = array.length;
    for (let i = arrayLength - 1; i >=0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;

}

// 