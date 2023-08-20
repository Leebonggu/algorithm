function solution(nums) {
  var answer = -1;
  
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  let count = 0;
  console.log('Hello Javascript')
  for(i = 0; i < nums.length; i += 1) {
      for (j = i + 1; j < nums.length; j += 1) {
          for (k = j + 1; k < nums.length; k += 1 ) {
              let sum = nums[i] + nums[j] + nums[k];
              let start = 1;
              let flag = 0;
              while (start < sum) {
                if (sum % start !== 0) {
                  flag += 1;
                  if (flag > 2) {
                    break
                  }
                }
                start += 1
              }
              flag = 0;
              start = 1;
          }
      }
  }
  return count;
}

console.log(solution([1,2,3,4]))