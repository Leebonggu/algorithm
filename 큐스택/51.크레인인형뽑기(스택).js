
const solution = function(board, moves) {
  const stack = [];
  let count = 0;
  const column = board.length;

  for (let x of moves) {
    for (let i = 0; i < column; i += 1) {
      if (board[i][x - 1] !== 0) {
        if (stack[stack.length - 1] === board[i][x - 1]) {
          count += 2;
          stack.pop();
        } else {
          stack.push(board[i][x - 1]);
        }
        board[i][x - 1] = 0;
        break;
      }
    }
    console.log(board)
  }
  console.log(stack);
  console.log(count);
}


const board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
];
const moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));
