let log = console.log;
let trace = console.trace;
let assert = console.assert;

function f(x, y) {
  return x + y;
}

// unnamed function
log(function () {
  return "hello";
});

// lambda functions
(x, y) => x + y;
let f2 = (x, y) => x + y;
log(f2);
// python에서 람다는 일회용이라는 인식이 있지만 JS 단에서는 화살표 함수가 일반 함수만큼
// 자주 사용된다.

let f3 = (x, y) => {
  // 중괄호가 생기면 return 추가해주어야 한다.
  return x + y;
};
log(f3);

let f4 = (x) => x ** 2;
log(f4);

// 즉시실행함수는 함수를 만들자마자 바로 실행합니다.
(function () {
  log("hello, world!");
})();

// 반지름이 입력되면 원의 넓이를 구하는 화살표 함수를 만들어주세요. 가능하면 가장 단축된 방법으로 부탁드립니다.
let area = (r) => Math.PI * r ** 2;
log(area(3));

// 다음처럼 여러 값이 입력되었을 때 가장 큰 값과 가장 작은 값, 총합을 한 번에 출력하는 함수를 만들어주세요
// f(10, 20, 30, 40) -> [max, min, sum]
const maxminsum = (ls) => [
  // [spread syntax](https://stackoverflow.com/a/1669222)
  Math.max(...ls),
  Math.min(...ls),
  ls.reduce((a, b) => a + b),
];
log(maxminsum([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]));
