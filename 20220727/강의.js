
const fulfilled = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        console.log(num);
        if (Math.random() > 0.5) resolve(1);
        else reject(2);
    }, 1000);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); //2
  .finally(() => console.log("finally"))
  .catch(() => console.log("catch"))
  .then(() => console.log("then"));
  /*
  



  const requestData1 = () => 
     new Promise((resolve) => setTimeout(() => resolve(1), 3000)) 
  const requestData2 = () => 
     new Promise((resolve) => setTimeout(() => resolve(2), 2000)) 
  const requestData3 = () => 
     new Promise((resolve) => setTimeout(() => resolve(3), 1000)) 

const res = [];
requestData1()
   .then((data) => {
    res.push(data);
    return requestData2();
   })
   .then((data) => {
    res.push(data);
    return requestData3();
   })
   .then((data) => {
    res.push(data);
    console.log(res); // [1, 2, 3]
   })
   .catch(console.log.error);
   



const requestData1 = () => 
   new Promise((resolve) => setTimeout(() => resolve(1), 3000)) 
const requestData2 = () => 
   new Promise((resolve) => setTimeout(() => resolve(2), 2000)) 
const requestData3 = () => 
   new Promise((resolve) => setTimeout(() => resolve(3), 1000)) 

   Promise.all([requestData1(), requestData2(), requestData3()])
   .then(console.log) //[1, 2, 3]
   .catch(console.error);
   



   const waitCount = (callback) => {
    console.log("ONE");
    setTimeout(() => {
        console.log("TWO");
        callback();
    }, 1000);
   };
   const count3 = () => console.log("THREE");
   waitCount(count3);
   



   function buyCoffee(coffename, price, quantity, callback) {
    console.log(`${coffename}를 ${quantity}개 구입하려 합니다.`); //라떼를 2개 구입하려 합니다.
    console.log(`${coffename} 한개는 ${price}원 입니다.`);//라떼 한개는 5000원 입니다.
    setTimeout(() => {
        callback(price * quantity)
        console.log("커피값 계산 완료 했습니다."); //순서 맞추려면 콜백함수를 위로 올린다
    }, 1000);
   }

   function pay(money) {
    console.log(money + "원을 지불하셨습니다."); //10000원을 지불하셨습니다.
   }

buyCoffee("라떼", 5000, 2, pay);



// 프로미스 기본
new Promise((resolve) => {
    setTimeout(() => {
        let name = "삼양라면";
        console.log(name);
        resolve(name);
    },500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let name = prevName + ", 신라면";
            console.log(name);
            resolve(name);
        }, 500)
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let name = prevName + ", 진라면";
            console.log(name);
            resolve(name);
        })
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let name = prevName + ", 너구리";
            console.log(name);
            resolve(name);
        })
    });
  });

*/



// 프로미스 간단하게 바꾸기(함수사용)
const addRamen = (name) => {
    return (prevname) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newName = prevname ? `${prevname}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addRamen("삼양라면")()
     .then(addRamen("신라면"))
     .then(addRamen("진라면"))
     .then(addRamen("너구리"));