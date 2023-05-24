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

const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
  // 최신 문법을 사용하여 function을 등록할 수 있다.
  sayHello() {
    console.log("Hello, World!");
  },
};

/// CRUD (Create, Read, Update, Delete)는 모든 서비스의 기본중에 기본
// 1. 데이터 추가
babaYaga.height = 250;
babaYaga;
// 2. 데이터 업데이트
babaYaga.height = 0;
babaYaga;
// 전개구문을 활용한 복제
const human2 = {
  ...babaYaga,
  age: 10,
};
human2;

console.log(Object.keys(babaYaga));
console.log(Object.values(babaYaga));
console.log(Object.entries(babaYaga));

// 3. Delete
babaYaga.height = null;
babaYaga;
