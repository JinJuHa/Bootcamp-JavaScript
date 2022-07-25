//산술 연산자
let num=5*4
console.log(num); // 20

//문자열 연산자
let num1= 'My name is' + ' Lee';
console.log(num1);

//할당 연산자
let color = 'red';
console.log(color);

//비교 연산자
let num2 = 3 > 5;
console.log(num2);

//논리 연산자
let num3 = 'Hi';
console.log(typeof num3);

//--------------------------------------

let num4 = 5+2;
console.log(num4);

//---------------------------------------

var x = 1;

x++;
console.log(x);
x--;
console.log(x);

//-----------------------------------------

var x = 5, result;

result = x++;
console.log(result);
result = ++x;
console.log(result);
result = x--;
console.log(result);
result = --x;
console.log(result);

//-------------------------------------------

//아무런 변화가 없다
let num5 = +10;
console.log(num5);

let num6 = +(-10);
console.log(num6);

//-------------------------------------------


var x =1;

console.log(+x); //부수 효과는 없다

var x = true;
console.log(+x); //불리언 값을 숫자 타입으로 변환한다

x = false;
console.log(+x); //0 . 부수 효과는 없다
console.log(x); //false

x= 'Hello';
console.log(+x); //NaN

console.log(x); //변화 없음


//--------------------------------------------

//부호를 반전한다








