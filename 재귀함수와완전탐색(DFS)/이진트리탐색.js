/*
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
*/

const  solution = function(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    }
    console.log(v);
    DFS(v * 2);
    console.log(v);
    DFS(v * 2 + 1);
    console.log(v); // 후위순회
  }
}
DFS(1);

// Stack Frame: 중위순회


/*
  DFS(7)
  DFS(3)
 */

  /*

  DFS(8) => return
  DFS(4) => console.log(4)
  DFS(9) => return
  DFS(2) => console.log(2)
  DFS(10) => return
  DFS(5) => console.log(5)
  DFS(1) console.log(1);
  DFS(12) => return
  DFS(6) => console.log(6);
  DFS(13) => return

 */

/*
  console.log(4)
  console.log(2)
   console.log(1);
  
*/