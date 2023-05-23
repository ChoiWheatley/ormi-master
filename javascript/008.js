trace = console.log;
assert = console.assert;
trace = console.trace;

let one = true;
// python에서는 True입니다.
// python에서 json데이터로 통신할 때
// True에서 T를 대문자로 내보내면 안됩니다.
let two = false;
let three;
let four = null;
let five = Infinity; // 비교
// python에서는 float('inf')

trace(Boolean("")); // false
trace(Boolean(" ")); // true
trace(Boolean("abc")); // true
trace(Boolean(0)); // false
trace(Boolean(100)); // true
trace(Boolean(-100)); // true
trace(Boolean(three)); // false
trace(Boolean(four)); // false
trace(Boolean(five)); // true
trace(Boolean(NaN)); // false
one = 0;
assert(!one);

// 우리를 힘들게 하는 JS
trace(Boolean([]));
trace(Boolean({}));

trace(isNaN(undefined));
trace(isNaN(null));
trace(isNaN(NaN));

// ES6 에서 도입한 Number.isNaN
assert(!Number.isNaN(undefined));
assert(!Number.isNaN(null));
assert(Number.isNaN(NaN));
