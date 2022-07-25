/*
const obj = {
    x: 1,
    bar: function () {
        return this.x;
    },
    foo() {
        return this.x;
    },
};

console.log(obj.foo()); //1
console.log(obj.bar()); //1

console.log(new obj.bar()); //bar {}
console.log(new obj.foo()); //Uncaught TypeError: obj.foo is not a constructor


var sum = function(a, b) {
    return a + b;
};
console.log(sum(1,2)); //3

var sum = (a,b) => a + b;
console.log(sum(3,4)); //7

var sum = (a) => a * 10;
console.log(sum(2)); //20

var sum = () => 30;
console.log(sum()); //30


var create = (id, content) => ({id, content});
console.log(create(1, "javascript"));

var create = (id , content) => {
    return {id , content};
};

console.dir(create(1,"javascript"));




function Prefixer (prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function(x) {
        return this.prefix + " " + x;
    });
}

var pre = new Prefixer("Hi");
console.log(pre.prefixArray(["Lee","Kim"])); //[]배열표시
// (2) ['undefined Lee', 'undefined Kim']
// 0: "undefined Lee"
// 1: "undefined Kim"
// length: 2
// [[Prototype]]: Array(0)




function foo(...rest) {
    // 매개변수 rest는 인수들의 목록을 배열로 전달받은 rest 파라미터다.
    console.log(rest); //(5) [1, 2, 3, 4, 5]
}
foo (1, 2, 3, 4, 5);

function bar (param1, param2, ...rest) {
    console.log(param1); //1
    console.log(param2); //2
    console.log(rest); //[3, 4, 5]
}
bar(1, 2, 3, 4, 5);




const val1 = "my string";
const val2 = "my string2";

//const conVal = val1 + ", " + val2;
const conVal = `${val1} test ${val2}` //my string test my string2

console.log(conVal);




let years = [2001, 2010, 2015, 2018];
const str = "Test";

for (let year of years) {
    console.log(year); // 2001, 2010, 2015
    if (year == 2015) {
        break;
    }
}

for (let char of str) {
    console.log(char); //T, e, s, t
}



const TAX_RATE = 0.1;

let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice);



console.log(Math.random());

const random = Math.floor(Math.random() * 10 +1);
console.log(random);




console.log(new Date("2020/07/24").getFullYear());


const str = "Hello world";

str.substring(1,4);


const arr = ["apple", "banan", "orange"];
console.log(arr.length); //3

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // "apple", "banan", "orange"


const arr = [1, 2, 3]
console.log(arr.length);


const arr = new Array(10);

console.log(arr); //[empty × 10]
console.log(arr.length); //10

console.log(new Array()); //[]

console.log(new Array(1,2,3)); //[1,2,3]
*/



const arr = [0];
// 배열 요소의 추가
arr[1] = 3;

console.log(arr); // [0,3]
console.log(arr.length); //2

// 배열 요소의 갱신
arr[1] = 33;
console.log(arr); //[0,33]

// 배열 요소의 삭제
delete arr[1];
console.log(arr); //[0, empty]
