let userInfo = [];
function loadList() {
  const userJson = window.localStorage.getItem('user');
  userInfo = JSON.parse(userJson);
  if (userInfo == null) {
    userInfo = [];
  }
}
loadList();

let userTime = null;
function saveTime() {
  let value = userTime;
  window.localStorage.setItem("userTime", value);
}
saveTime();

let clockTime;
function loadTime() {
  const timeJson = window.localStorage.getItem('userTime');
  clockTime = timeJson;
  if (userTime == null) {
    clockTime = "00:00:00";
  }
}
loadTime();
// console.log("clocktime: " + clockTime);

let timerBox = document.querySelector("#countdown_timer");
let gap = 0;

let on = Number(userInfo.onTime);
let off = Number(userInfo.offTime);

function convert(){
  let converted = time * 60000;
  return converted; 
}

let countTime = {
  startTime: 0,
  endTime: 0,
};
function saveCount() {
  let value = JSON.stringify(countTime);
  window.localStorage.setItem("countTime", value);
}
saveCount();
// console.log(countTime);




let clickTime;

const countdown = () =>{
  let now = Date.now();
  countTime.startTime = now;
  // console.log(countTime.startTime)
  saveCount();
  gap = clickTime - now;
  if(gap < 0){
    gap = 0;
    document.querySelector('#timesUpModal').style.display = "flex";
  }
  // console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24

  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  let thetime = `${textHour}:${textMinute}:${textSecond}`;
  timerBox.innerHTML = thetime;
  userTime = thetime;
  saveTime();
  loadTime();
  // console.log(countTime);
}



let clockBox = document.querySelector("#clock");

let workButton = document.querySelector("#work");

workButton.addEventListener("click", () => {
  time = on;
  clickTime = Date.now() + Number(convert());
  countTime.endTime = clickTime;
  saveCount();
  // console.log(countTime);
  
  // save clicktime to local stoorage
  //loads time back
  setInterval(updateUserTime, 1000);
  // setInterval(countdown, 1000);
});

let relaxButton = document.querySelector("#relax");

relaxButton.addEventListener("click", () => {
  time = off;
  clickTime = Date.now() + Number(convert());
  countTime.endTime = clickTime;
  saveCount();
  // console.log(countTime);

  setInterval(updateUserTime, 1000);
  // setInterval(countdown, 1000);
});


// window.onload = function() {
  
// };

function updateUserTime(){
  setInterval(countdown, 1000);
  saveTime();
  loadTime();
  // console.log(clockTime)
  clockBox.innerHTML = `${clockTime}`;
}

// document.querySelector('#closeButton').addEventListener("click", function() {
// 	document.querySelector('#timesUpModal').style.display = "none";
// });

// window.onload = function() {
//   yourFunction(param1, param2);
// };