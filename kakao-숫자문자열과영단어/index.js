function solution(s) {
  const stringToNumber = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      zero: 0,
  }
  let result = ''
  let cur = ''
  for (let i = 0; i < s.length; i += 1) {
    if (!Number.isNaN(parseInt(s[i]))) {
      result += s[i]
    } else {
      cur += s[i]
      if (stringToNumber[cur] || stringToNumber[cur] === 0) {
        result += stringToNumber[cur]
        cur = ''
      }
    }
  }
  return parseInt(result);
}

console.log(solution("fivezerofive"))