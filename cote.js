/*

문제 설명
1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

제한사항
a, b, c, d는 1 이상 6 이하의 정수입니다.


*/
function solution(a, b, c, d) {
  const dices = [a, b, c, d];
  const numFrequency = dices.reduce((acc, cur) => {
    acc[cur] = acc[cur] ?? 0;
    acc[cur]++;
    return acc;
  }, {});
  console.log(numFrequency);

  const valInfo = Object.values(numFrequency);
  const keyInfo = Object.keys(numFrequency);
  // return valInfo
  const countVal = Math.max(...valInfo);
  switch (countVal) {
    case 4:
      return a * 1111;
    case 3: {
      const threeKey = keyInfo.find((a) => numFrequency[a] === 3);
      const oneKey = keyInfo.find((a) => numFrequency[a] === 1);
      console.log(threeKey, oneKey);
      return (10 * Number(threeKey) + Number(oneKey)) ** 2;
    }
    case 2: {
      if (keyInfo.length === 2) {
        if (a === b) return (a + c) * Math.abs(a - c);
        return (a + b) * Math.abs(a - b);
      } else {
        return keyInfo.reduce(
          (acc, cur) => (numFrequency[cur] === 1 ? acc * cur : acc),
          1
        );
      }
    }
    default: {
      return Math.min(a, b, c, d);
    }
  }

  return numFrequency;
}
