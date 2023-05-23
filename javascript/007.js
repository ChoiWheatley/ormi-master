log = console.log;
trace = console.trace;
assert = console.assert;

let n1 = 10000;
let n2 = "100000";
let n3 = "100,000,000";
let n4 = 10.123123;

trace(parseInt(n2));
trace(parseInt(n3));
trace(parseInt(n1, 2));
trace(n4.toFixed(10));
trace(n1.toString());

// Math
trace(Math.max([1, 2, 3, 4, 5])); // NaN
trace(Math.max(...[1, 2, 3, 4, 5])); // `...` 전개문법
trace([1, 2, 3, 4, 5].reduce((a, b) => a + b)); // SUM

trace(Math.round(Math.random() * 100));
// (Math.random() * ( 최대값 - 최소값 )  ) + 최소값
trace(Math.random() * (20 - 10) + 10);

trace("Number.MAX_SAFE_INTEGER : " + Number.MAX_SAFE_INTEGER);
trace(Number.MAX_SAFE_INTEGER + 1); // Not safe integer
trace(Number.MAX_VALUE);
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 2년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1
trace(BigInt(5) + BigInt(5));
trace(BigInt(9007199254740990) + BigInt(5));
