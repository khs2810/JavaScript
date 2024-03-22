/**
 * Scope
 */

var number1 = 20; // window가 가지고 있음

function test1() {
    console.log(number1);
}

// test1();

function test2() {
    var number1 = 40;
    console.log(number1);
}
//scope가 가지고 있음

// test2();

// 변수는 두번 선언했지만, 함수 안에서 먼저 찾고, 함수안에 없다면, 그 밖에서 찾는다.

var number1 = 20;
function test3() {
    var number1 = 40;
    test4();
    console.log("number1 : " + number1)
}

function test4() {
    var number2 = 11;
    console.log("number2 : " + number2)
    console.log("number1 : " + number1)
}

test3();
console.log(number1);

/**
 * JS => Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

// var i = 1000;
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("i = " + i);

var i = 1000;
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("i = " + i);