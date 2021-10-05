process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]); 
    const b = Number(n[1]);
    const res = Array(b).fill("*".repeat(a)).join('\n');
    console.log(res);
});

// console.log로 출력해야함. 위에 콘솔직어놨다가 계속 패스안되서 고생함

// String.prototpye.repeat:메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
'abc'.repeat(2);    // 'abcabc'
// Array.prototpye.fill: 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
const array1 = [1, 2, 3, 4];
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
// Array.prototpye.join: 주어진 요소를 기준으로 배열을 묶어줌
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"