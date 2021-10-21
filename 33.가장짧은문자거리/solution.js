/*
한 개의 문자열 s와 문자 t가 주어지면 
자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다.
문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1
teachermode / e
▣ 출력예제 1
10121012210
*/

function solution(str, char) { 
  const result = [];
  let flag = 1000;
  str.split('').forEach((c) => {
    if (c === char) {
      flag = 0;
      result.push(flag);
    } else {
      flag += 1;
      result.push(flag);
    }
  });
  flag = 1000;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    console.log(str[i]);
    if (str[i] === char) {
      flag = 0;
      result[i] = flag;
    } else {
      flag += 1;
      result[i] = Math.min(result[i], flag);
    }
  }
  return result;
}

console.log(solution('abcdefghijf', 'e'));