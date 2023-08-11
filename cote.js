/*

문제 설명
정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ end ≤ start ≤ 50
입출력 예
start	end	result
10	3	[10, 9, 8, 7, 6, 5, 4, 3]

*/
function solution(start, end) {
  var answer = [];
  for (let x = start; x >= end; x--) {
    answer.push(x);
  }
  return answer;
}
