/*
  1~N 부분집합 출력
  공집합제외
*/

const solution = function(number) {
  let result = [];
  let check = Array.from({length: number + 1}, () => 0);
  const DFS = function(v) {
    if (v > number) {
      let tmp = '';
      for (let i = 1; i <= number; i += 1) {
        if (check[i] === 1) {
          tmp += i;
        }
        if (tmp.length) result.push(tmp);
      }
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1)
  console.log(result);
};

solution(3)