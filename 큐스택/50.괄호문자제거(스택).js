/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
남은 문자만 출력한다.
▣ 입력예제 1 (A(BC)D)EF(G(H)(IJ)K)LM(N)
▣ 출력예제 1 EFLM
*/

// const solution = function(str) {
//   const stack = [];
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === '(') {
//       stack.push(str[i]);
//     } else if (str[i] === ')') {
//       stack.pop();
//     }
//     if (!stack.length && str[i] !== '(' && str[i] !== ')') {
//       result += str[i];
//     }
//   }
//   console.log(result);
// };

const solution = function(str) {
  const stack = [];
  let result = '';

  for (let x of str) {
    if (x === ')') {
      while(stack.pop() !== '(') {
        console.log(stack);
      }
    } else {
      stack.push(x);
    }
  }
  console.log(stack);
  return stack.join('');
};

console.log(solution('(A(BC)D)EF(G(H)HHH(IJ)K)HHLM(N)'))