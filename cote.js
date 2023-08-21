/*

문제 설명
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 1000
1 ≤ pat ≤ 10



*/

function solution(myString, pat) {
  var answer = 0;
  let matchStr = "";
  answer = [...myString].reduce((acc, curr, i) => {
    matchStr = myString.slice(i, pat.length + i);
    if (matchStr === pat) acc++;
    return acc;
  }, 0);
  return answer;
}
