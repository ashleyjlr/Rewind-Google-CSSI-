// import { createNewUser } from './settings.js';

let userInfo = [];
function loadList() {
  // load from local storage if it exists.  
  const userJson = window.localStorage.getItem('currentuser');
  userInfo = JSON.parse(userJson);
  if (userInfo == null) {
    userInfo = [];
  }
}
loadList();
console.log(userInfo.onTime);
console.log(userInfo.offTime);

let time = 0;
let done = false;
let stop = false;

let on = userInfo.onTime;
let off = userInfo.offTime;

function convert(){
  let converted = time * 60000;
  return converted; 
}








// let clickTime = Date.now() + Number(convert());
let clickTime;

// let startButton = document.querySelector("#start");
// startButton.addEventListener("click", () => {
//   clickTime = Date.now() + Number(convert());
// });


let timerBox = document.querySelector("#countdown_timer");
//let gap = 0;
let over = false;

const countdown = () =>{
  // const countDownTime = new Date("August 1, 2022 00:00:00").getTime();
  // const now = new Date().getTime();
  // const gap = countDownTime - now;

  let now = Date.now();
  //gap = clickTime - now;
  let gap = clickTime - now;
  // console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // timerBox.innerHTML = `${textDay}:${textHour}:${textMinute}:${textSecond}`;
  timerBox.innerHTML = `${textHour}:${textMinute}:${textSecond}`;

  if (gap < 0){
    over = true;
  }
}

// setInterval(countdown, 1000);

let pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", () =>{
  stop = true;
});



let workButton = document.querySelector("#work");

workButton.addEventListener("click", () => {
  //time = on;
  clickTime = Date.now() + Number(convert());
  // setInterval(countdown, 1000);
  run();
  
});

let relaxButton = document.querySelector("#relax");

relaxButton.addEventListener("click", () => {
  //time = off;
  clickTime = Date.now() + Number(convert());
  // setInterval(countdown, 1000);
  run();
});

let runTimer = setInterval(countdown, 1000);


// // while(!stop){
//   if (!done){
//     time = on;
//     if (gap >= 0){
//       runTimer;
//     }  
//     else{
//       clearInterval(runTimer);
//     }
//     done = true;
//   }
//   else{
//     time = off;
//     if (gap >= 0){
//       runTimer;
//     }  
//     else{
//       clearInterval(runTimer);
//     }
//     done = false;
//   }
// }

function run() {
  if (!done){
    time = on;
    // if (gap >= 0){
    if (!over){
      runTimer;
    }  
    else{
      clearInterval(runTimer);
    }
    done = true;
  }
  else{
    time = off;
    if (!over){
      runTimer;
    }  
    else{
      clearInterval(runTimer);
    }
    done = false;
  }
}

