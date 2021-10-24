const solution = function(numbers) {
  const result = numbers;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = 0; j < numbers.length - i - 1; j += 1) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        console.log(numbers);
      }
    }
  }
  console.log(result);
}

solution([5,4,3,2,1]);