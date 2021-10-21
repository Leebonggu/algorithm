/*
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.

arr[행][열]
*/

function solution(arr) {
  const rl =[];
  const td =[0, 0, 0, 0, 0];
  const diagonal = [0, 0];
  let len = arr.length - 1;
  let reverseLen = 0;

  for (let i = 0; i < arr.length;  i += 1) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      sum += arr[i][j];
      td[j] += arr[i][j];
      if (i === j) {
        diagonal[0] += arr[i][j]
      }
      if (i === reverseLen && j === len) {
        diagonal[1] += arr[i][j]
        reverseLen += 1;
        len -= 1;
      }
    }
    rl.push(sum);
  }
  const total = [...rl, ...td, ...diagonal]
  const max = Math.max(...total);
  console.log(max);
  return max;
}

// function solution(arr){  
//   let answer=Number.MIN_SAFE_INTEGER;
//   let n=arr.length;
//   let sum1=sum2=0;
//   for(let i=0; i<n; i++){
//       sum1=sum2=0;
//       for(let j=0; j<n; j++){
//           sum1+=arr[i][j];
//           sum2+=arr[j][i];
//       }
//       answer=Math.max(answer, sum1, sum2);
//   }
//   sum1=sum2=0;
//   for(let i=0; i<n; i++){
//       sum1+=arr[i][i];
//       sum2+=arr[i][n-i-1];
//   }  
//   answer=Math.max(answer, sum1, sum2); 
//   return answer;
// }


const board = [
  [10, 13, 10, 12, 15], //i
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
// j
];

solution(board);
