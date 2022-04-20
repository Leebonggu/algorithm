// 정렬
function sortAscending(arr) {
  if (!arr.length) return [];

  const copy = [...arr];

  for (i = 0; i < copy.length; i += 1) {
    for (j = i + 1; j < copy.length; j += 1) {
      if (copy[i] > copy[j]) {
        let temp = copy[i]
        copy[i] = copy[j]
        copy[j] = temp
      }
    }
  }

  return copy;
}

function solution(array, commands) {
  return commands.map(command => {
      const [ start, end, pick ] = command;
      return  sortAscending(array.slice(start - 1, end))[pick - 1];
    }
  )
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))