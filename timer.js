let userInfo = [];
function loadList() {
  const userJson = window.localStorage.getItem('user');
  userInfo = JSON.parse(userJson);
  if (userInfo == null) {
    userInfo = [];
  }
}
loadList();

let timerBox = document.querySelector("#countdown_timer");
let gap = 0;

let on = Number(userInfo.onTime);
let off = Number(userInfo.offTime);

function convert(){
  let converted = time * 60000;
  return converted; 
}

let clickTime;

const countdown = () =>{
  let now = Date.now();
  gap = clickTime - now;
  console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24

  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  timerBox.innerHTML = `${textHour}:${textMinute}:${textSecond}`;
}

let workButton = document.querySelector("#work");

workButton.addEventListener("click", () => {
  time = on;
  clickTime = Date.now() + Number(convert());
  setInterval(countdown, 1000);
});

let relaxButton = document.querySelector("#relax");

relaxButton.addEventListener("click", () => {
  time = off;
  clickTime = Date.now() + Number(convert());
  setInterval(countdown, 1000);
});