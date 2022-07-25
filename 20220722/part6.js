/*
var string = 'Hello World.';
var search = 'l';
var count = 0;
// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'y');
console.log(string.match(regexp).length); // 3
*/


/*
// 함수 호이스팅 - 함수 선언문
function printName(firstName) {
    var result = inner();
    console.log(typeof inner);
    console.log("name is " + result);
}

function inner() {
    return "inner value";
}

printName();


//함수 표현식
function printName(firstName) {
    var inner = function () {
        return "inner value";
    };
    var result = inner();
    console.log("name is " + result);
}

printName();



const x = 1;

function foo () {
    const y = 2;

    function bar() {
        const z = 3;
        console.log( x + y + z );
    }
    bar();
}
foo();




const x = 1;
function outerFun() {
    const x = 10;

    function innerFunc() {
        console.log(x);
    }

    innerFunc();
}

outerFun();


//클로저라고 하지 않는다 - 상위 스코프를 참조하기 않기 때문에
function foo() {
    const x = 1;
    const y = 2;

    function bar() {
        const z = 3;
        // 상위 스코프를 참고하지 않음
        console.log(z);
    }
    return bar;
}

const bar = foo();
bar();


//클로저의 활용

const increase = function () {
    let num = 0;
    return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());
*/

const increase = ( function () {
    let num = 0;
    return function () {
        return ++num;
    };
})();

