// /*
//   십진수를 이진수로 바꾸기
// */

const binary = function(number) {
  let result = '';
  const recur = function(recurNumber) {
    if (recurNumber === 0) {
      return;
    }
    recur(Math.floor(recurNumber / 2));
    result += recurNumber % 2 // 0
  } 
  recur(number);
  return result;
};

console.log(binary(11))
// recur(0) // return
// recur(1) // 0
// recur(2)
// recur(5)
// recur(10)