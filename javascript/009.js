// Basic Operations

// arithmetic operations
trace = console.trace;
log = console.log;
assert = console.assert;

let one = 10;
let two = 3;

log(`one / two is ${one / two}`);

// compare operations
let x = "10";
let y = 10;
assert(x == y);
assert(!(x === y));

// logic operations
let t = true;
let f = false;
assert(!(t && f));
assert(!!t);
assert(!!"hello");
assert(Boolean(t));
assert(false === !!NaN);
assert(false === !!null);
assert(false === !!undefined);
assert(!![]); // => true
assert(false === Number.isNaN({}));
assert(false === Number.isNaN([]));

// 단락평가
n = "";
log(n || "이름이 입력되지 않음!");
n = "승현";
log(n || "이름이 입력되지 않음!");

로그인여부 = true;
log((로그인페이지 = 로그인여부 && "<h1>환영합니다</h1>"));

// nullish 병합 연산자 `??`
// `||`는 0도 통과시키기 때문에 의도와 적합하지 않다.
// https://ko.javascript.info/nullish-coalescing-operator
// a ?? b의 평가 결과는 a가 null도 아니고 undefined도 아니면 a, null | undefined라면 b를 리턴
let firstName = null;
let lastName = null;
let nickName = "licat";
log(firstName ?? lastName ?? nickName ?? "익명의 사용자");
nickName = null;
log(firstName ?? lastName ?? nickName ?? "익명의 사용자");

// 삼항연산자 tenery operator
assert("hello" == true ? "hello" : "world");

// range-like for-loop
log([...Array(5).keys()]);

for (const i of Array(5).keys()) {
  log(i);
}
