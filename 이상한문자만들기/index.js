function solution(s) {
  return s
    .split(" ")
    .map(
      (outer) => outer.split('').map(
        (inner, i) => i % 2 === 0 ? inner.toUpperCase() : inner.toLowerCase()
      ).join('')
    ).join(' ')
}

console.log(solution("try hello world"))