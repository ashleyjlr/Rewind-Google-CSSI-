const menuBtn = document.querySelector('.menu-btn');
let menuLine = document.querySelectorAll(".menu-btn_find");
let logoWord = document.querySelector("#logo_words");
let sideBar = document.querySelector("#side_bar");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    sideBar.style.display = "flex";
    // sideBar.style.flexDirection = "column";
    // sideBar.style.justifyContent = "space-between";
    logoWord.style.color = "white";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    sideBar.style.display = "none";
    logoWord.style.color = "#335145";
    menuOpen = false;
  }
});

// let offbuttons = document.querySelector("#customOffButton");
// let onbuttons = document.querySelector("#customOnButton");
// let askOff = document.querySelectorAll("#customOff");
// let askOn = document.querySelectorAll("#customOn");

// offbuttons.addEventListener("click", () => {
//   console.log(askOff);
//   askOff.innerHTML = `<div class="control">
// // //   <input class="input is-hovered is-rounded" type="number" placeholder="Hovered input">
// // // </div>`;
//   console.log(askOff);
// });

const buttons = document.querySelectorAll(".customChangeButton");
let askInput = document.querySelectorAll(".customButton");

buttons.forEach((customChangeButton) => {
  customChangeButton.addEventListener("click", () => {
    askInput.innerHTML = `<div class="control">
  <input class="input is-hovered is-rounded" type="number" placeholder="Hovered input">
</div>`;
    // askInput.innerHTML = "hello";
    console.log(askInput);
  });
}); 
