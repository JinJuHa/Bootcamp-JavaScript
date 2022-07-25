// 2-2차 

//1. for문을 이용한 구구단 작성
//9단부터 2단으로 진행된다
//5단은 제외(continue사용)



for (var i=9; i >= 1; i--) {
    if (i == 5){
        continue;
    }
    console.log('== ' + i + '단 ==');
    for (var ro = 1; ro <= 9; ro++) {
        console.log(i + " * " + ro + " = " + i*ro);
    }
}


//2. 객체 생성 (객체 리터럴에 의한 객체 생성 및 수정, 삭제)
//user에 키가 name, 값이 Kim인 프로퍼티를 추가한다
//user에 키가 surname, 값이 Smith인 프로퍼티를 추가한다
//name의 값을 Pete로 수정한다.
//user에서 프로퍼티 name을 삭제한다

var user = {
    name : 'Kim',
    surname : 'smith'
};


user["name"] = "Pete";
delete user.name;

console.log(user);



//2-3차



//이중 for문을 이용한 삼각형 별 찍기
//결과
//*
//**
//***
//****
//*****


for (var i =0; i < 5; i++) {
    for (var jo = 0; jo <= i; jo++) {
        document.write("*");
    }
    document.write("<br>");
}



//3차
//1. 메서드를 포함한 객체 생성(자유롭게)  
//메서드를 호출해서 자유롭게 값까지
//메모장에 해서 제출


var student = {
    name : '진주하',
    age : '26',
    gender : 'female',
    address : 'gyeonggido Namyangju',
    hobby : 'Drawing',

    sayHello: function () {
        console.log('Hi! My name is ' + this.name + ' and hobby ' + this.hobby);
    }
};

console.log(student);
//{name: "진주하", age: "26", gender: "female", address: "gyeonggido Namyangju", hobby: "Drawing", …}

student.sayHello();
//Hi! My name is 진주하 and hobby Drawing

