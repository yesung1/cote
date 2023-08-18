/*

문제 설명
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 1,000,000
1 ≤ arr의 원소의 값 ≤ 100

*/

function solution(arr) {
  var answer = [];
  answer = arr.map((v) => {
    if (v >= 50 && v % 2 === 0) return v / 2;
    if (v < 50 && v % 2 === 1) return v * 2;
    return v;
  });
  return answer;
}
