# 완전탐색 Brute-Force

- 모든 경우의 수를 다 해보는 방법
- Brute-Force 무식하게 풀기
- 컴퓨터의 빠른 연산능력을 사용하는 방식

## 종류

- 순열
- 백트래킹
- BFS

## 구현과정

1. 가능한 모든 가지수 계산
- 입력, 출력 제한이 중요

2. 어떤 식으로 구현을 할지 생각
- 단순반복, 순열, 재귀(백트래킹)

## 시간계산

1. 얼마나 걸리는지 계산해야함
2. 보통 1억번의 연산 = 1초

## 소수처리

```js

function isPrime(number) {
  if (number === 1) {
    return false;
  };
  for (let i = 2; i < parseInt(number / 2); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}
```

## 숫자자리 뒤집기
```js
  temp = number;
  let acc = '';
  while(temp) {
    acc += temp % 10;
    temp = Math.floor(temp / 10);
  }
  reversed.push(Number(acc));

  temp = number;
  let res = 0;
  while(temp) {
    let t = temp % 10;
    res = res * 10 + t;
    temp = parseInt(temp / 10);
  }
```

