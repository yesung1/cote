/*


문제 설명
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ arr1의 길이 ≤ 100
1 ≤ arr2의 길이 ≤ 100
1 ≤ arr1의 원소 ≤ 100
1 ≤ arr2의 원소 ≤ 100
문제에서 정의한 배열의 대소관계가 일반적인 프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.




*/

function solution(arr1, arr2) {
  let leng1 = arr1.length;
  let leng2 = arr2.length;
  let v1 = arr1.reduce((acc, curr) => acc + curr);
  let v2 = arr2.reduce((acc, curr) => acc + curr);
  if (leng1 !== leng2) return leng1 > leng2 ? 1 : -1;
  if (v1 === v2) return 0;
  return v1 > v2 ? 1 : -1;
}
