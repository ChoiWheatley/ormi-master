/**
 * # Conditionals
 */
condition = true;
condition = true;

if (condition) {
  console.log("if");
} else if (condition2) {
  console.log("else if");
} else {
  console.log("else");
}

state = "sleepy";
switch (state) {
  case "happy":
    console.log("I'm happy");
    break;
  case "sleepy":
    console.log("I wanna go sleep");
    break;
  case "hungry":
    console.log("I'm starving");
    break;
  default:
    console.log("default");
    break;
}

switch (new Date().getDay()) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  default:
    console.log("금금요일입니다. 주말이 뭐죠?");
    break;
}

/**
 * # Loops
 */
for (const i of [10, 20, 30]) {
  console.log(i);
}
// `in` 문법은 다시 말하지만 인덱스 또는 객체의 key를 가져온다.
for (const i in [10, 20, 30]) {
  console.log(i);
}
for (const key in { one: 1, two: 2 }) {
  console.log(key);
}

myObject = {
  지역이름: "전국", // key : value(2개의 집합을 가리켜 객체 프로퍼티)
  확진자수: 24889,
  격리해제수: 23030,
  사망자수: 438,
  십만명당발생율: 48.0,
};

for (const k in myObject) {
  console.log(`(${k}: ${myObject[k]})`);
}
