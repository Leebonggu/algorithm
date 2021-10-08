function solution(numbers) {
  const answer = [];
  let startNumber = numbers[0];
  let baseIndex = 0;
  let startIndex = 1;
  
  for (let i = baseIndex; i < numbers.length; i += 1) {
      for (let j = startIndex; j < numbers.length; j += 1) {
          const result = startNumber + numbers[j];
          if (!answer.includes(result)) {
            answer.push(result);
          }
      }
      baseIndex += 1;
      startIndex += 1;
      startNumber = numbers[baseIndex];
  }
  answer.sort((a, b) => a - b);
  return answer;
}

solution([5,0,2,7])

/*
다른사람풀이
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

*/ 
