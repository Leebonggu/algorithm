/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
1 3 1 2 3
합이 5이하가 되는 연속부분수열은

{1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
▣ 출력설명
첫째 줄에 경우의 수를 출력한다.
▣ 입력예제 1 55 13123
▣ 출력예제 1 10
*/


// const solution = function(sol, arr) {
//   let left = 0;
//   let count = 0;
//   let sum = 0;
//   const result = [];

//   for (let right = 0; right < arr.length; right += 1) {
//     sum += arr[right];
//     if (sum <= sol) {
//       count += 1;
//       result.push([right, left]);
//     }
//     while (sum > sol || left !== arr.length) {
//       sum -= arr[left];
//       left += 1;
//       if (sum <= sol) {
//         count += 1;
//         result.push([right, left]);
//       }
//     }
//   }
//   console.log(result)
//   return count;
// };

const solution = function(sol, arr) {
  let left = 0;
  let count = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right += 1) {
    sum += arr[right];
    while (sum > sol) {
      sum -= arr[left];
      left += 1;
    }
    count += (right - left + 1);
  }
  return count;
};

console.log(solution(5, [1,3,1,2,3]));