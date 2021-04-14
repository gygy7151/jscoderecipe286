// 빈데이터를 나타낼때

//'데이터 없음'을 표시하고 싶을 때 Null을 사용함

function searchUser(targetID) {
    const userList = [
        { id: 1, name: '사자'},
        { id: 2, name: '곰'},
        { id: 3, name: '여우'}
    ];

    // 해당 유저 검색
    const targetUser = userList.find((user) => user.id === targetId);
    return targetUser.name;

}


searchUser(1);      // 1을 전달하면 사자를 반환
searchUser(4);      // 4를 전달하면 에러가 발생 ->  return targetUser.name;에서 해당 유저가 존재하지 않아 에러발생

// 위와 같은 에러를 피하려고 undefined를 null로 반환하여 빈데이터 나타냄 가능
function searchUSer(targetID) {
    const userList = [
        { id: 1, name: '사자'},
        { id: 2, name: '곰'},
        { id: 3, name: '여우'}
    ];

    // 해당 유저 검색
    const targetUser = userList.find((user) => user.id === targetId);

    // 데이터가 undefined인 경우 작업 추가
    if (targetUser === undefined) {
        return null;
    }

    return targetUser.name;
}

console.log(searchUser(1));     // 결과: '사자'
console.log(searchUser(4));     // 결과: null




