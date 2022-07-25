/*
//윈도우에서 기본으로 깔려있는 것들이 나옴
function foo (){
    console.log("foo is this : ", this);
    function bar() {
        console.log("bar is this : ", this);
    }
    bar();
}
foo();
*/



/*
// 메서드 호출
const person = {
    name : "Lee",
    getName() {
        return this.name;
    },
};

console.log(person.getName()); // Lee


const anotherPerson = {
    name: "Kim",
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); // kim
//객체에서 빠져나와 변수에다 집어넣었기 때문에 일반 함수가 됨
const getName = person.getName;

console.log(getName()); //일반 함수로 호출하면 윈도우 네임이 되기 때문에 윈도우 네임=빈 자리가 뜬다
*/



/*
//생성자 함수 호출(메서드)
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius; 
    };
}
const circle1 = new Circle(5);

console.log(circle1.getDiameter());





//스코브
var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
}

foo();
console.log(x);






//함수 레벨 스코프
var a = 10; //전역함수

(function () {
    var b = 20;
})(); //즉시실행함수 / 지역변수

console.log(a);
console.log(b);




var x = "global";

function foo() {
    var x = "local";
    console.log(x);
}

foo();
console.log(x);



var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // local

    function bar() { //내부함수
        console.log(x); // local
    }
    bar();
}
foo();
console.log(x); //global


var x = 10;
function foo () {
    var x = 100; //var x로 바꾸면 console.log(x);값이 10으로 나옴
    console.log(x); // 100
}
foo();
console.log(x); // 100? 전역에 있는 x를 덮어썼기 때문에 100이 나오는걸 볼 수 있다


var x = 10;

function foo() {
    var x = 100;
    console.log(x);  //100

    function bar() {
        x = 1000;
        console.log(x);  //1000
    }
    bar();
}
foo();
console.log(x); //10
*/



//렉시컬 스코프 - 정의
var x =1;

function foo () {
    var x = 10;
    bar ();
   // console.log(x) //10
}

function bar () {
    console.log(x); //1
}

foo();
bar();