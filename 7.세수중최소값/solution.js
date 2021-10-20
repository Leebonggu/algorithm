/*
  세 수중  최소값
*/

function solution(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;

}

console.log(solution(6, 5, 11));