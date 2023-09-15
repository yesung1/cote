/*


문제 설명
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
image.png
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

제한사항
board는 n * n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.


*/

function solution(board) {
  var answer = 0;
  let board2 = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board2[i - 1 >= 0 ? i - 1 : i].fill(1, j - 1 >= 0 ? j - 1 : j, j + 2);
        board2[i].fill(1, j - 1 >= 0 ? j - 1 : j, j + 2);
        board2[i + 1 >= board.length ? i : i + 1].fill(
          1,
          j - 1 >= 0 ? j - 1 : j,
          j + 2
        );
      }
    }
  }
  return (answer = board2.flat().filter((n) => !n).length);
}
