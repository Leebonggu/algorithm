
const { v4: uuidv4 } = require('uuid');
const R = require('ramda');

const result = {};
const loop = 10000;
const color = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getUnicode = (str) => str.charCodeAt(0)
const modulo = R.flip(R.modulo)
const getHashKey = R.pipe(
  R.split(''),
  R.map(getUnicode),
  R.reduce(R.add, 0),
  modulo(color.length)
)

console.time('for');
for (let i = 0 ; i < loop; i += 1) {
  const uuid = uuidv4();
  const key = getHashKey(uuid)
  result[key] = result[key] ? result[key] + 1 : 1
}

console.timeEnd('for');

const 평균 = loop / color.length
const 편차제곱합 = Object.entries(result)
  .map(([index, count]) => count)
  .reduce((acc, cur) => {
    const 편차 = cur - 평균;
    return acc += (편차 * 편차)
  } , 0)

const 표준편차 = Math.sqrt(편차제곱합 / color.length);
console.log('Loop', loop)
console.log('결과', result)
console.log('표준편차', 표준편차)
