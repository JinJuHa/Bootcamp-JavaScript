/*
var egg;   //변수의 선언
egg = 10; //변수의 할당
여러줄 주석 

//모두 숫자 타입이다
var integer = 10;  //정수
var double = 10.12; //실수
var negartive = -20; // 음의 정수
var binary = 0b01000001; //2진수
var octal = 0o101; // 8진수
var hex = 0x41; //16진수

//표기만 다를 뿐 모두 같은 식
console.log(binary); //65
console.log(octal); //65
console.log(hex); //65
console.log(binary === octal); // true
console.log(octal === hex); // true



var str = "string"; //큰따옴표
str = 'string'; //작은따옴표
str = `string`; //백틱(ES6)

//console.log(str);



var str = 'Hello';
str = 'meta';
//변수 str은 hello를 가리키고 잇다가 meta를 가리키게 됨

console.log(str);



str += " practice";
//str = str + "practice"
console.log(str); // string practice

str = str.substring(0, 3);
console.log(str); // str

str = str.toUpperCase();
console.log(str); // STR


var x = "true";
var y = false;

//""를 붙이면 굴자가 되기 때문에 불리언이 아니게 된다

console.log(typeof x);
console.log(typeof y);

var test;
console.log(test);
//자바스크립트 엔진에서 자동으로 출력된 문자다

var adress = "Seoul";
adress = null;
console.log(adress);
//Seoul은 없어진 것이 아니라 표기한 부분이 null로 보여지는 것이다

*/

var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); //number

foo = "Hello";
console.log(typeof foo); //string

foo = true;
console.log(typeof foo); //boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); //심벌
console.log(typeof foo); //symbol

foo = {}; //객체
console.log(typeof foo); //object

foo = []; // 배열
console.log(typeof foo); //object

foo = function() {}; //함수
console.log(typeof foo); //function



console.log(fee);
var fee = 123;
console.log(fee);
{
    var fee = 456;
}
console.log(fee);



var x = 5, 
  result; // 동일한 변수


result = x++;
console.log(result, x); // 선할당 후증가

result = ++x;
console.log(result, x); // 선증가 후할당

result = x--;
console.log(result, x); // 선할당 후감소

result = --x;
console.log(result, x); // 선감소 후할당


var x = 10;
var y = x-- + 5 + --x;

console.log(x,y);
x = 8
y = 23


var x;

x = 10; //10
x += 5; //15
x -= 5; //5
x *= 5; //50
x /= 5; //2
x %= 5; //0

var str = "My name is cho";
console.log(str);
str += " test";
console.log(str);

5 === 5 //true
5 === '5' // false
NaN === NaN //false

var result = x % 2 ? '홀수' : '짝수';
console.log(result);

var height = 160;
// height가 140보다 작으면 '140보다 작다'를
// height가 140보다 크면 '140보다 크다'를 반환

var value = height < 140 ? '140보다 작다' : '140보다 크다';
console.log(value);


console.log(true || true); // or 이랑 비슷. 둘중의 하나라도 같으면
true || true;
true || false;
false || true;
false || false;

true && true; // 반드시! 하나만 틀려도 틀림
true && false;
false && true;
false && false;

!true;
!false;


let num = 0;
let kind;

//if문
if (num > 0) {
    kind = "양수";
}
console.log(kind);

//if, ...else문
if (num > 0) {
    kind = "양수";
} else {
    kind = "음수";
}
console.log(kind);


if (num > 0) {
    kind = "양수";
} else if (num < 0) {
    kind = "음수";
} else {
    kind = "영";
}
console.log(kind);


var x = 2;
var result;

if (x % 2) {
    result = "홀수";
} else {
    result = "짝수";
}
console.log(result);



var score = 76;
var result;

if (score >= 90) {
    result = "A";
} else if (score >= 80) {
    result = "B";
} else if (score >= 70) {
    result = "C";
} else {
    result = "F";
}
console.log(result);

// score 90보다 크거나 같으면 'A'
// score 90보다 작고 80보다 크거나 같으면 'B'
// score 80보다 작고 70보다 크거나 같으면 'C'
//나머지는 'F'



var x = 10;
var y = 20;

if (x === y) {
   console.log('두 수가 같다');
} else {
    if (x > y) {
        console.log('x가 크다');
    }
    if (x < y) {
        console.log('y가 크다');
    }
}

// x와 y가 같으면 '두 수가 같다'
// x가 y보다 크면 'x가 크다'
// x보다 y가 적으면 'y가 작다'
// 2중 if문 사용할 것 (두 수가 같지 않다면 x와y를 비교)








