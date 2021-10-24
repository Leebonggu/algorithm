/*
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
*/

const  solution = function(v) {
  let answer;
  function DFS(v) {
    if ( v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2)
      DFS(v * 2 + 1)
    }
  }
  DFS(v);
  return;
}

solution(1);