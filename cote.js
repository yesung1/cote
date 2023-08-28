/*

문제 설명
정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
제한사항
1 ≤ n ≤ 100


*/

function solution(n) {
  let answer = [];
  const arr1 = Array.from(Array(n), () => new Array(n).fill(0));
  for (let x = 0; x < arr1.length; x++) {
    arr1[x][x] = 1;
  }
  return (answer = arr1);
}
