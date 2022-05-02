function solution(arr) {
  const result = []
  arr.forEach(e => {
      const last = result[result.length - 1];
      if (last !== e) {
          result.push(e)
      }
  })
  
  return result
}