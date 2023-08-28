/*

문제 설명
양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ n ≤ 30


*/

function solution(n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let num = 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
}
