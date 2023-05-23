/// object

log = console.log;
assert = console.assert;

// python과의 차이점
// key 값에 따옴표가 없을 경우 자동으로 문자열로 변환해줌.
// true, false값은 앞에 대소문자가 다르다.
let obj = {
  id: "licat",
  pw: "1234",
  name: "leehojun",
  email: "hojun@gmail.co.kr",
  active: false,
};

log(obj);
obj["id"];
log(obj.id); // 얘도 되네??

obj;

let a = 10;
let b = 20;
let c = 30;
let abc = { a, b, c };
abc;

// 유사배열객체 => 배열과 유사하지만 배열은 아님.
let txt = {
  0: "h",
  1: "e",
  2: "l",
  3: "l",
  4: "o",
};
txt;
for (let i = 0; i < 5; ++i) {
  log(txt[i]);
}

let user = {
  id: "licat",
  pw: "1234",
  name: "leehojun",
  email: "hojun@gmail.co.kr",
  active: false,
};

user;

log(Object.keys(user));
log(Object.values(user));
log(Object.entries(user));

// user.keys와 같은 메서드가 존재하지 않는다.
// Object를 상속받는 곳이 너무 많기 때문이다.
// `keys` 메서드가 존재하는 클래스는 바로 `Map`이다.
