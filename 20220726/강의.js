/*
const arr = [1 , 2];

let result = arr.push(3 , 4);
console.log(result); // 4

console.log(arr);  // [1, 2, 3, 4]


const arr = [1 , 2];
let result = arr.pop();
console.log(result); //2

console.log(arr); //[1]



const arr = [1 , "orange", {name:"Lee"}];
arr.push(5);
console.log(arr); // [1, 'orange', {…}, 5]

const popItem = arr.pop();
console.log(popItem); // 5
console.log(arr); // [1, 'orange', {…}]



const arr = [1 , 2];
let result = arr.unshift(3 , 4);
console.log(result); // 4
console.log(arr); //[3 , 4 , 1 , 2]



const arr = [1 , 2];
let result = arr.shift();
console.log(result); //1
console.log(arr); //[2]



const arr1 = [1 , 2];
const arr2 = [3 , 4];

let result = arr1.concat(arr2);
console.log(result); //[1, 2, 3, 4]

result = arr1.concat(arr2, 5);
console.log(result); //[1, 2, 3, 4, 5]

console.log(arr1); //[1, 2]


const arr = [1, 2, 3, 4];

const result1 = arr.splice(1, 2, 20, 30);
const result2 = arr.splice(1, 0, 100);
const result3 = arr.splice(1, 2);
const result4 = arr.splice(1);

console.log(result1); //[2, 3]
console.log(arr); //[1]


const points = [40, 100, 1, 5, 2, 25, 10];

points.sort((a , b) => a - b);
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

points.sort((a , b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]


const number = [1, 2, 3];
let pows = [];

for (let i = 0; i < number.length; i++) {
    pows.push(number[i] ** 2);
}
console.log(pows); //[1, 4, 9]



const numbers = [1, 2, 3];
let pows = [];

numbers.forEach((item) => pows.push(item ** 2));
console.log(pows); //[1, 4, 9]



const number = [1, 2, 3, 4, 5];
const odds = number.filter((item) => item % 2 === 0);
console.log(odds); // [2, 4]



const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); //3.5


console.log(...[1, 2, 3]);

console.log(..."Hello");

//console.log(...{ a: 1, b: 2});

const list = ...[1, 2, 3];
*/

console.log("시작 ===");

setTimeout(() => {
    console.log("안녕");
})


