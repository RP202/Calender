alert(";) Like how you make my time better!")
let date= document.getElementById("Date");
let days= document.getElementById("Days");
let year= document.getElementById("Year");
let month= document.getElementById("Month");

const today=new Date(); //shpowing corrent date tim

console.log(today);
const weekDays=["Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"];
const months=["January","Febuary","Wednesday","Thrusday"
,"Friday","Saturday"];

date.innerHTML= today.getDate(); //sare today wale predefined hai
days.innerHTML= weekDays[today.getDay()];
year.innerHTML= today.getFullYear();
month.innerHTML= months[today.getMonth()];