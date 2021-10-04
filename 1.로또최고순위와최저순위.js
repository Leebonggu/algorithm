function sameThingLength(except, wins) {
  const sameThing = wins.filter(num => except.includes(num)).length;
  return sameThing;
}

function solution(lottos, win_nums) {
  const exceptZero = lottos.filter(num => num !== 0);
  const sameThing = sameThingLength(exceptZero, win_nums);
  switch (exceptZero.length) {
    // 0: 6개
    case 0:
      return [1, 6];
    case 1:
      // 0: 5개, 아닌거 1
      if (sameThing === 1) {
          return [1, 6]
      }
    case 2:
      // 0: 4개, 아닌거 2
      if (sameThing === 2) {
          return [1, 5]
      } else if (sameThing === 1) {
          return [2, 6]
      } else if (sameThing === 0) {
          return [3, 6]
      }
    case 3:
      // 0: 3개, 아닌거 3
      if (sameThing === 3) {
          return [1, 4]
      } else if (sameThing === 2) {
          return [2, 5]
      } else if (sameThing === 1) {
          return [3, 6]
      } else if (sameThing === 0) {
          return [4, 6]
      }
    case 4:
      // 0: 2개, 아닌거 4
      if (sameThing === 4) {
          return [1, 3]
      } else if (sameThing === 3) {
          return [2, 4]
      } else if (sameThing === 2) {
          return [3, 5]
      } else if (sameThing === 1) {
          return [4, 6]
      } else if (sameThing === 0) {
          return [5, 6]
      }
    case 5: 
      // 0: 1개, 아닌거 5
      if (sameThing === 5) {
          return [1, 2]
      } else if (sameThing === 4) {
          return [2, 3]
      } else if (sameThing === 3) {
          return [3, 4]
      } else if (sameThing === 2) {
          return [4, 5]
      } else if (sameThing === 1) {
          return [5, 6]
      } else if (sameThing === 0) {
          return [6, 6]
      }
    case 6:
      // 0: 0개, 아닌거 6
      if (sameThing === 6) {
          return [1, 1]
      } else if (sameThing === 5) {
          return [2, 2]
      } else if (sameThing === 4) {
          return [3, 3]
      } else if (sameThing === 3) {
          return [4, 4]
      } else if (sameThing === 2) {
          return [5, 5]
      } else if (sameThing === 1) {
          return [6, 6]
      } else if (sameThing === 0) {
          return [6, 6]
      }
    
  }
}

// 다른사람 솔루션
// 아주 부끄럽군요?

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    // 최소 몇개가 포함되어있는가
    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    // 0은 조커같은것
    let zeroCount = lottos.filter(v => !v).length;

    // 만약 0이 2개, 아닌개 4개
    // mincount 최대는 4 => 4개가 같다는거

    // !v => falsy를 이용. 즉 !5 => fasly, !0 => truthy
    // !v라는건 => 결국 0인것만 뽑아내겠다는 것
    
    const maxCount = minCount + zeroCount; // 최대로 같을 수 있는 경우


    return [rank[maxCount], rank[minCount]];
}
