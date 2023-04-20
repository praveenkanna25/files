///{
//   var a=5
//}
///console.log(a);
//for loop
//var sum=0
//for(let i=1; i<=7; i++){
//  sum=sum+i;
//  console.log("value is:"+i);
//}
//console.log(sum);
//while loop
//var i=0;
//while(i<=10){
// i++;
//console.log(i);
//}
//Do while
//var i=0;
//do{
// i++;
//  console.log(i);
//}while(i<=10);
//Switch case
//var a=2;
//switch(a){
// case 1:
//   console.log("day1");
//  case 2:
// console.log("day2");
//}
//conversion
//let a=10;
//let b="30";
//let c=Number(b);
//console.log( a+ c);
//coersion
//let d=30;
//let e="10";
//.console.log(d-e);
//Function declaration
//var currentYear=2023;
//function calculateMyAge(birthYear){
//let age=currentYear-birthYear;
// console.log(age)
//}
//calculateMyAge(2002);

//var x=20;
//function a(y){
//let i=x-y;
// console.log(i)
//}
//a(10);

//Function Expression
//var currentYear=2023;
//let calculateMyAge=function(birthYear){
//return currentYear-birthYear;
//};
//let age= calculateMyAge(2001);
//console.log(age);
// Arrow Function
//const currentYear=2023;
//let calculateMyAge=(year)=> currentYear-year;
//let age= calculateMyAge(2005);
//console.log(age);

// Array
//Push
//let Arr=[10,20,30,60,90];
//let result=Arr.push(80);
//console.log(Arr);
//console.log(result);

//unshift
//Arr.unshift(50);
//console.log(Arr);

//pop
//Arr.pop();
//console.log(Arr);

//shift
//Arr.shift();
//console.log(Arr);

//indexOf
//let result=Arr.indexOf(60);
//console.log(result);

//includes
//let i=Arr.includes(40);
//console.log(i);

//slice
//const department=["civil","Mech","CSE","Petro","EEE","ECE"]
//const result=department.slice(2,4);
//console.log(result);

//splice
//const language=["Tamil","English","Hindi","malayalam","telugu"]
//const i=language.splice(1, 3,"german","marati");
//console.log(i);
//console.log(language);

//reverse
//let a=department.reverse();
//console.log(a);

//concat
//let b=department.concat(language);
//console.log(b);

//currentYear=2023;
//let detail={
// name:"praveen",
// age:22,
// mail:"praveen@gamil.com",
// mobile:904567845,
// hobbies:["music","game","sleep"]
// birthYear:2001,
//getAge: function(){
//return currentYear-this.birthYear;
//},
//}
// console.log(detail.getAge());
//console.log(detail);
//console.log(detail.age);
//console.log(detail["mail"])
//let detail={
// name:"praveen",
//age:22,
// mail:"praveen@gamil.com",
// mobile:904567845,
// DL:true,

// }
//let val= detail.DL?"a":"no";
// console.log(`my name is ${detail.name} my age is ${detail.age} i have ${val} driver lience`)

let heading = document.querySelector("#formHeader");
let regLink = document.getElementById("register-link");
let register = document.getElementById("register-btn");

regLink.addEventListener("click", toRegisterForm);

function toRegisterForm() {
  heading.textContent = "REGISTER FORM";
  login.style.display = "none";
  register.style.display = "block";
}
//---------------------------------------------------------------

let loginLink = document.getElementById("login-link");
let login = document.getElementById("login-btn");
login.addEventListener("click", toLoginForm);

function toLoginForm() {
  login.style.display = "block";
  register.style.display = "none";
}

function onChangeUserName(){
  console.log(unameInput.value);
}
function onInputUserName(){
   if(unameInput.value.length<8){
      unameInput.style.backgroundColor="orange";
      unameInput.style.color="black";
   }else if( (unameInput.value.length>=8)){
   
   }
}
