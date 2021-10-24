/*

*/

const solution = function(a) {
  const stack =[];
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === '(') {
      stack.push(a[i]);
    } else {
      stack.pop();
      if (a[i - 1] === '(') {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  } 
  console.log(result);
}

solution('()(((()())(())()))(())');