/*
  십진수를 이진수로 바꾸기
*/

const solution = function(number) {
  let result = '';
  function DFS(number) {
    if (number === 0) {
      return;
    } else {
      DFS(parseInt(number / 2));
      result += number % 2;
    }
  }
  DFS(number);
  return result;
}

console.log(solution(11));