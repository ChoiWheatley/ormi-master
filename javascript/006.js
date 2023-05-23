c = console;

let txt = "hello";
let undefined_; // 'undefined'가 저장되어있음
c.assert(undefined === undefined_);

c.assert("hellohello" === txt + txt);
c.assert("h" === txt[0]);

c.assert(4 === txt.indexOf("o"));
c.assert(4 === txt.search("o"));

let regex = /[ea]llo/g;
c.assert(1 === txt.search(regex));

// slicing
c.assert("ello" === txt.slice(1, 5));
// slice(시작인덱스, 종료인덱스) : 시작인덱스부터 종료인덱스-1까지 반환합니다.
c.assert("ello" === txt.slice(1, 5)); // 슬라이싱
c.assert("ello" === txt.slice(1));
c.assert("" === txt.slice(3, 1)); // 작동하지 않습니다.

// substring(시작인덱스, 종료인덱스) : 시작인덱스부터 종료인덱스-1까지 반환합니다.
c.assert("el" === txt.substring(1, 3));
c.assert("el" === txt.substring(3, 1)); // 작동합니다.

// replace(바꿀문자열, 바뀔문자열)
c.log(txt.replace("world", "jeju"));
// python과 달리 정규표현식이 replace안에서 가능합니다!
let txt2 = "paullab CEO leehojun! hello world hello world";
c.log(txt2.replace("world", "jeju"));
c.log(txt2.replace(/world/g, "jeju"));

// 있지만 사용하긴 어렵다.
// 저는 그냥 사용합니다.
c.log(txt2.replaceAll("world", "jeju"));

c.log(txt2.toUpperCase());
c.log(txt2.toLowerCase());

// split (정규표현식 가능합니다.)
c.log(txt2.split(" "));
"010-5044-2903".split("-");

// trim(Python에 strip과 같은 역활)
c.log("         a b c         ".trim());
