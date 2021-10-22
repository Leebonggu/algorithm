/*

선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
선생님이 가지고 있는 예산은 한정되어 있습니다.
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
배송비는 할인에 포함되지 않습니다.

▣ 입력설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

▣ 출력설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.

▣ 입력예제 1 
5 28
6 6
2 2
4 3
4 5 
10 3
▣ 출력예제 1
4

출력설명
(2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.

상품을 사는 개수가 중요
=> 총비용으로 정열
=> 할인쿠폰 사용고려: 기준이 없음
=> 그럴 모든 경우 해봐야함
=> 모든 경우란? 할인을 어떤 상품을 받을 것인가?
*/


function solution(information) {
  const [students, budget] = information[0];
  const gift = information.slice(1, information.length).sort(([a, b], [c, d]) => (a + b) - (c + d));
  let result = 0;
  const n = gift.length;
  for (let i = 0; i < n; i += 1) {
    let money = budget - ((gift[i][0] / 2) + gift[i][1]);
    let count = 1; // 이미 1개는 산다고 가정하니까
    for (let j = 0; j < n; j += 1) {
      console.log(gift[j][0] + gift[j][1] )
      if (i !== j && gift[j][0] + gift[j][1] > money) break;
      if (i !== j && gift[j][0] + gift[j][1] <= money ) {
        console.log(money ,'-',(gift[j][0] + gift[j][1]));
        money -= (gift[j][0] + gift[j][1]);
        console.log('money',money);
        count += 1;
      } 
    }
    result = Math.max(result, count);
  }
  return result;
}

const information = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(information));