arr = [[10, 20], 1, 2, 3, 4, 5];
console.log(`arr[0] = ${arr[0]}`);
console.log(`arr[0][0] = ${arr[0][0]}`);
console.log(`arr.length = ${arr.length}`);

const unordered = [1, 11, 2, 3, 7, 8, 22, 5];
console.log(`lexicographical 정렬 결과: ${unordered.sort()}`); // 뭣이????
// 오름차순 정렬
console.log(`오름차순 정렬 결과: ${unordered.sort((a, b) => a - b)}`);
// 내림차순 정렬
console.log(`내림차순 정렬 결과: ${unordered.sort((a, b) => b - a)}`);

// forEach method
// (<value>, [index], [array])
unordered.forEach((value, index, array) => {
  console.log(`item: ${value}, index: ${index}, array: ${array}`);
});

// filter
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.filter(function (el) {
  return el % 2 === 0;
});

console.log(newArr);

// filter 관련 추가 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120583
const solution = (array, n) => array.filter((x) => x === n).length;
console.assert(2 === solution([1, 1, 2, 3, 4, 5], 1));

// reduce => 배열의 모든 원소로부터 하나의 값을 누적하고 싶을 때 사용.
console.log(
  arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
);

const stringArray = ["h", "e", "l", "l", "o"];
console.log(stringArray.reduce((prev, cur) => prev + cur, ""));

// includes
// python의 `in`과 똑같음. 다만, JS에서도 `in`구문이 있는데, 얘는 인덱스를 체크하는 녀석이라는거
console.assert(stringArray.includes("o"));

// join
const arr12 = ["hello", "world", "hojun"];
console.log(arr12.join("!"));
