/*

문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000

*/

function solution(num_list) {
  var answer = [];
  answer = num_list.reduce(
    (acc, curr) => {
      curr % 2 ? (acc[1] += 1) : (acc[0] += 1);
      return acc;
    },
    [0, 0]
  );
  return answer;
}
