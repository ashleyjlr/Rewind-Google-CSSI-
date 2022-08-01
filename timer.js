// import { createNewUser } from './settings.js';

let timerBox = document.querySelector("#countdown_timer");

const countdown = () =>{
  const countDownTime = new Date("August 1, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDownTime - now;
  

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  timerBox.innerHTML = `${textDay}:${textHour}:${textMinute}:${textSecond}`;

  if (gap < 10000){
    console.log();
  }
}

setInterval(countdown, 1000);
