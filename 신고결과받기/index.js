function solution(id_list, report, k) {
  const memo = report.reduce((acc, r) => {
    const [신고자, 피신고자] = r.split(" ");
    if (!acc[피신고자]) {
      acc[피신고자] = [];
    }

    if (!acc[피신고자].includes(신고자)) {
      acc[피신고자].push(신고자);
    }
    return acc;
  }, {});

  const flatMap = Object.entries(memo)
    .filter(([_, 신고자]) => 신고자.length >= k)
    .reduce((acc, [_, 신고자]) => {
      return [...acc, ...신고자];
    }, []);

  const result = id_list.map(
    (name) => flatMap.filter((신고자) => 신고자 === name).length
  );

  return result;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k));
