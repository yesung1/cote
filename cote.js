/*

문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ start ≤ end ≤ 50



*/
function solution(start, end) {
  var answer = [];
  let x = start;
  for (x; x <= end; x++) {
    answer.push(x);
  }
  return answer;
}
