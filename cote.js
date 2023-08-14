/*

문제 설명
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

단, arr에 2가 없는 경우 [-1]을 return 합니다.

제한사항
1 ≤ arr의 길이 ≤ 100,000
1 ≤ arr의 원소 ≤ 10

*/

function solution(arr) {
  var answer = [];
  let first = 0;
  let last = 0;
  first = arr.findIndex((a) => a === 2);
  last = arr.length - [...arr].reverse().findIndex((a) => a === 2) - 1;
  first === -1 || last === -1
    ? (answer = [-1])
    : (answer = arr.slice(first, last + 1));
  return answer;
}
