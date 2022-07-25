
var menu = 'burger';
var resurlt;
//메뉴가 sandwitch 일때, 'menu good'
// 메뉴가 pizza, pasta, salad, macaroon 중에 하나라도 있다면 'menu soso'
// 나머지는 메뉴 'menu bad'

if (menu == 'sandwitch') {
    resurlt = 'menu good';
} else if (
    menu == 'pizza' ||
    menu == 'pasta' ||
    menu == 'salad' ||
    menu == 'macaroon' ||
    ) {
        result = 'menu soso';
    } else {
        result = 'menu bad';
    }

console.log(menu);



switch(month) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'Invalid month';                    

}

console.log(monthName);
*/

/*
var menu = 'pizza';

if (menu == "sandwitch") {
    console.log("menu good");
} else if (menu == "pizza") {
    console.log("menu pizza");
} else if (menu == "pasta")  {
    console.log("menu pasta")
} else if (menu == "salad") {
    console.log("menu salad")
} else {
    console.log("defalent menu");
}
*/

/*switch (menu) {
    case "sandwitch" || "pizza";
     console.log("논리곱");
}*/

//var gender = "남";
//var msg = "";

// 값이 남성 남자 남 일 경우 '당신의 성별은 남자 입니다'
// 값이 여성 여자 여 일 경우 '당신의 성별은 여자 입니다'
// 어떠한 값도 없을 경우 '성별을 다시 확인 해주세요'
//결과값을 변수 msg에 할당하여 최종적으로 출력


if (gender == "남" ||
gender == "남자" ||
gender == "남성") {
    msg = "당신의 성별은 남자입니다";
} else if (gender == "여" ||
gender == "여자" ||
gender == "여성") {
    msg = "당신의 성별은 여성입니다";
}



switch (gender) {
    case "남자" :
    case "남성" :
    case "남" :
        msg = "당신의 성별은 남자 입니다";
        break
    case "여자" :
    case "여성" :
    case "여" :
        msg = "당신의 성별은 여자입니다";
        break
    default :
        msg ="성별을 다시 입력해주세요";
    }
    console.log(msg);


//안녕하세요 10번 출력
 for (var i = 0; i < 10; i++) {
    document.write("안녕하세요.");
    document.write("<br>");
 }



 // 'n번째 반복 문장입니다.' 10번 출력
 // n은 1씩 증가하는 숫자

 for (var i = 1; i < 11; i++) {
     document.write(i + "번째 반복 문장입니다.");
     document.write("<br>");
}


//1~50까지 출력하는데 2의 배수만 출력

for (var i = 1; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var i; i >= 0; i--) {
    console.log(i);
}



//2중 for문 : 중첩이 되도록 사용
for (var i = 1; i <= 6; i++) {
    for (var gtg = 1; gtg <= 6; gtg++) {
        if (i + gtg === 6) //반드시 6이 나오도록 하려면 if문 입력
        console.log(i,gtg);
    }
}
*/

//이중 포문을 이용한 구구단
//결과
// == 2단 ==
//2 * 1 = 2
//2 * 2 = 4
// .....
//2 * 9 =18
//......
//9 * 8 = 72
//9 * 9 = 81


for (var i=2; i <=9; i++) {
    console.log('== '  + i + '단 ==');
    for (var ts = 1; ts <= 9; ts++) {
        console.log(i + " * " + ts + " = " + i*ts);
    }
}



// 이중 for문을 이용한 별찍기(document.write 이용)
//결과
//*****
//5줄 나오기

/*
for (var i =0; i < 5; i++) {
    for (var jo =0; jo < 5; jo++) {
        document.write("*");
    }
    document.write("<br>");
}



//true를 사용하게 될 때 무한으로 돌아가기 때문에 break를 잘 사용해야 한다
var count = 0;
while (true) {
    console.log(count);
    count++;

    if (count === 3) {
        break;
    }
}
*/


//While문 실습
//1부터 100까지 출력
/*
var val = 0;
var i =0;

while (i <= 100) {
    val = val + i;
    i++;
}


while (true) {
    val += val + i;
    if (i == 100) {
        break;
    }
    i++;
}

console.log(val);


// 0 ~ 10까지 반복문을 출력할 때
// break 이용하여 i가 6일때 반복문 종료

for (var i = 0; i <= 10; i++) {
    if (i === 6) {
        break;
    }
}

console.log(i);



for(var i = 0; i <3; i++){
    for(var j =0; j < 3; j++) {
        if(i + j === 3) {
            break;
        }
        console.log("inner " + i + j);
    }
}
*/


var string = "Hello meta";
var cnt = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== "l") {
        continue;
    }
    cnt++;
}

console.log(cnt);


// 0~10까지의 반복문을 출력할 때
// continue 를 이용하여 홀수 1 3 5 7 9 출력

for(var i = 0; i <=10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


var x = 10;
console.log(typeof x);

var str = x.toString();
console.log(typeof str);

var str = x + "";
console.log(typeof str);


var person = {
    name : 'Jin',
    gender : 'male',
    sayGoodBye: function () {
        console.log("bye see you soon" + this.name);
    },
};

console.log(typeof person);
console.log(person);

console.log(person.gender);

//객체 리터럴=생성과 동시에 할당
var emptyObject = {};
console.log(emptyObject);

var person = new Object();
console.log(person);

person.adress = "Seoul";
console.log(person);

person.sayHello = function() {
    console.log("안녕");
};

person.sayHello();


var circle = {
    radius: 5,
    getDiameter:function() {
        return 2 * this.radius;
    },
};

console.log(circle.getDiameter());

var person = {
    'first-name' : 'Gill-dong',
    'last-name' : 'Hong',
    gender: 'male',
};

person["first-name"] = "Dang-mu";
console.log(person["first-name"]); //갱신,수정이 용의하다

person.age = 25;
console.log(person); // 객체 안에 나이 항목 추가


delete person.gender;
console.log(person);

//함수 선언문

console.log(spuare(4)); //정의되기 이전에도 사용 가능

function spuare(number) {
    return number  * number;
}


var foo = function muItiply(a,b) {
    return a * b;
};

var bar = function(a,b) {
    return a * b;
};

console.log(foo(10,5));
//console.log(muItiply(10,5));
console.log(bar(4,5));



function add (x,y) {
    return x + y;
}

console.log(add(2));
console.log("a","b");

*/

function add (a, b, c) {
    a = a || 0;
    b = b || 0;
    return a + b +c;
}

function add (a = 0, b = 0, c = 0) {
    return a + b + c;
}


function calculateArea(width, height) {
    var area = width * height;
    return area;
}
console.log(calculateArea(3,5));



function muItiply(x,y) {
    return
    x + y; // 붙여서 써야 반환문으로 돌아옴
}
console.log(muItiply(3,5));

function muItiply(x,y) {
    return x + y; // 붙여서 써야 반환문으로 돌아옴
}
console.log(muItiply(3,5));






function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = "Kim";
}

var num = 100;
var person = {name : "Lee"}; //참조

changeVal(num, person);

console.log(num);
console.log(person);


//익명 즉시 실행 함수
(function() {
    var a = 3;
    var b = 5;
    return a * b;
})();


//기명 즉시 실행 함수
(function myFunction() {
    var a = 3;
    var b = 5;
    return a * b;
})();

//값을 반환할 수 있다
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
})();
console.log(res);

//인수를 전달할 수 있다
res = (function (a,b) {
    return a * b;
})(3,5);
console.log(res);




//재귀함수
function conutDown(n) {
    if (n < 0) {
        return;
    }


console.log(n);
conutDown(n - 1);
}
conutDown(10);



//콜백함수
function repeat(n,f) {
    for (var i=0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

repeat(5, logAll);




var count = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);


//생성자 함수 : 리터럴 함수보다 편리함
function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHelllo = function () {
        return "hi my name is " + this.name;
    };
}

var person1 = new Person("Lee", "male");
var person2 = new Person("Kim", "female");

console.log(person1.sayHelllo());
console.log(person2.sayHelllo());