//let a = second.getAttribute("class")
//let b = second.removeAttribute("class")
//console.log(a);
//console.log(b);
//console.log(second.hasAttribute("style"));

//let newPara = document.createElement('h3');
//newPara.textContent = "of this world";
//document.body.appendChild(newPara);

//alert("hello");
//let a= setInterval(function(){
// alert("inside hello")
//},2000)
//clearTimeout(a);
//console.log(a);

//let content = document.querySelector('h1')
 //function eventClean(){
   // content.style.background='green';
//};
//document.addEventListener('click', eventClean);
//document.removeEventListener('click', eventClean);


//function eventRemove(){
  //  console.log('nobody');
//};
//document.addEventListener('click', eventRemove);
//document.removeEventListener('click', eventRemove)

//let a = new Date()
//let h = a.getHours()
//let m = a.getMinutes()
//let s = a.getSeconds()
//let d = a.getDate()
//let y = a.getFullYear()
//let u = a.getMonth()
//console.log(h,m,s,d,y,u)

//let p = new Promise((resolve, reject)=>{
 // console.log("print")
  //setTimeout(()=>{
   // console.log("hello")
   // reject(new Error("i am error"))
  //},3000)
//});

//let p1= new Promise((resolve, reject)=>{
  //setTimeout(()=>{
   // console.log("bye")
   // resolve(true)
 // },3000)
//});

//p1.then((value)=>{
//  console.log(value)
//});
//p.catch((error)=>{
 // console.log("error found")
//})
//async function harry(){
//let delhiWeather = new Promise((resolve, reject)=>{
 // setTimeout(()=>{
//resolve("30 deg");
 // },1000);
//});

//let bangloreWeather = new Promise((resolve, reject)=>{
//  setTimeout(()=>{
// resolve("25 deg");
// },2000);
//});
//let lucknowWeather = new Promise((resolve, reject)=>{
 // setTimeout(()=>{
//resolve("32 deg");
 // },3000);
//});
//delhiWeather.then(alert);
//bangloreWeather.then(alert);
//lucknowWeather.then(alert);
//}
//harry();
//console.log("welcome to weather control room")

//p1.then((value)=>{
//console.log(value);
//});
//p2.then((value)=>{
 // console.log(value);
 // });
 // p3.then((value)=>{
   // console.log(value);
   // });

 //   let promise_all = Promise.all([p1,p2,p3])
   //    promise_all.then((value)=>{
    //    console.log(value);
    //   });

  //  setTimeout(()=>{
  //    console.log("wifi");
    //    },1000);
      
    //    try{
    //      console.log(rahul)
//}
     //   catch(error){
  //    console.log("chalo")
//    }

   //     setTimeout(()=>{
    //    console.log("saket");
    //        },2000);

      ////      setTimeout(()=>{
      ///        console.log("password");
       //         },3000);



           
//let p = new Promise((resolve, reject)=>{
 // setTimeout(()=>{
//reject(new Error("error found"))
 // },3000)
//})

//let options ={
 // method:"POST",
  //headers: {
   // "content-type": "application/json"
  //},
  //body: JSON.stringify({
   // title: 'Saket',
    //body: 'kumar',
    //userId: 110,
  //}),
//}
//fetch('https://jsonplaceholder.typicode.com/posts', options)
//.then((response)=> response.json())
//.then((json)=> console.log(json));


//console.log(document.cookie)
//document.cookie = "name=saket0074112"
//document.cookie = "name1=saket0074112"
   // let key = prompt("enter the key")
   // let value= prompt("enter the value")
   // document.cookie= `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
   // console.log(Document.cookie)


  //  let set = {
  //   a:10,
  //   b:11,
  //   c:12
  // };
  
  // let copy = {...set};
  // console.log(copy);

// const d = new Date("2023-08-24");
// // d.setFullYear(2022);
// console.log(d)

// 

// let content = document.querySelector('h1');
// function eventClean(){
//   content.style.color="red";
// }
// content.addEventListener("click", eventClean);
// content.removeEventListener("click", eventClean)

// let a = setInterval(function(){
//   alert("hi everyone");
// },2000);
// console.log(a)  
// clearInterval(a);              


// setTimeout(function(){
//   alert("kaise ho")
// },1000)
// function sync (){
//   alert("hello")
// };
// sync();
// alert("namastey");

// async function harry(){
//   return 7;
// }

async function weather(){
  let lucknowWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("32 deg")
    },1000)
  });

   let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("34 deg")
    },2000)
  });

   let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("28 deg")
    },3000)
  });
  lucknowWeather.then(alert)
  delhiWeather.then(alert)
  bangloreWeather.then(alert)
}
weather();