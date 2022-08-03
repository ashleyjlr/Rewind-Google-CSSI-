let clockTime;
function loadTime() {
  const timeJson = window.localStorage.getItem('userTime');
  clockTime = timeJson;
  if (timeJson == null) {
    clockTime = "00:00:00";
  }
}
loadTime();
console.log("clocktime: " + clockTime);


let userTime;
function saveTime() {
  let value = userTime;
  window.localStorage.setItem("userTime", value);
}
saveTime();



let clockBox = document.querySelector("#clock");


let openTime = [];
function loadCount() {
  const countJson = window.localStorage.getItem('countTime');
  // openTime = countJson;
  openTime = JSON.parse(countJson);
  if (openTime == null) {
    openTime = [];
  }
}
loadCount();
console.log(openTime.startTime);
console.log(openTime.endTime);

// let clickTime = openTime.startTime;
// let now = openTime.endTime;
// let clickTime = openTime.endTime;
// let clickTime = Date.now();
// let clickTime = openTime.endTime;
// let now = openTime.startTime;
// let now = Date.now();


let clickTime = openTime.endTime;
// let now = openTime.startTime;


const countdown = () =>{
  let now = Date.now();
  gap = clickTime - now;
  // gap = now - clickTime;
  console.log(clickTime);
  console.log(now);
  if(gap < 0){
    gap = 0;
  }
  console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24

  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  let thetime = `${textHour}:${textMinute}:${textSecond}`;
  clockBox.innerHTML = thetime;
  userTime = thetime;
  saveTime();
  loadTime();
}

function updateUserTime(){
  setInterval(countdown, 1000);
  saveTime();
  loadTime();
  console.log(clockTime);
  clockBox.innerHTML = `${clockTime}`;
}
// updateUserTime();


window.onload = function() {
  updateUserTime();
};
