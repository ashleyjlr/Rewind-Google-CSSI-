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

// create user ID
function getRandomId() {
  return Math.floor(Math.random() * 1e6).toString();
}

let user = {
    id: getRandomId(),
    onTime: [],
    offTime: [],
};

// let offbuttons = document.querySelector("#customOffButton");
// let onbuttons = document.querySelector("#customOnButton");
// let askOff = document.querySelector("#customOffButtonCluster");
// let askOn = document.querySelector("#customOnButtonCluster");

// offbuttons.addEventListener("click", () => {
//   askOff.innerHTML += `<br><div class="control"><input class="input is-hovered is-rounded" type="number" placeholder="Minutes">minutes</div>`;
//   offbuttons.removeEventListener('click', onClick);
// });
// onbuttons.addEventListener("click", () => {
//   askOn.innerHTML += `<br><div class="control"><input class="input is-hovered is-rounded" type="number" placeholder="Minutes">minutes</div>`;
//   onbuttons.removeEventListener('click', onClick);
// });

let custom_button = document.querySelector("#customButton");
const offButtons = document.querySelectorAll(".offtimeButtons");

let offTimeMinutes = 0;
let onTimeMinutes = 0;

offButtons.forEach((offtimeButtons) => {
  offtimeButtons.addEventListener("click", (e) => {
    offtimeButtons.classList.add("selectedOff");
    // console.log(offtimeButtons.value);
    offTimeMinutes = offtimeButtons.value;
    getOffTime();
    
    // createNewUser();
    saveList();
    console.log(user);
  });
});

const onButtons = document.querySelectorAll(".ontimeButtons");

onButtons.forEach((ontimeButtons) => {
  ontimeButtons.addEventListener("click", (e) => {
    ontimeButtons.classList.add("selectedOn");
    onTimeMinutes = ontimeButtons.value;
    getOnTime();
    
    // createNewUser();
    saveList();
    console.log(user);
  });
});

let on_input = document.querySelector("#onInput");
let on_custom = document.querySelector("#onCustom");
let off_input = document.querySelector("#offInput");
let off_custom = document.querySelector("#offCustom");

on_input.addEventListener("change", () =>{
  onCustom.value = Number(onInput.value);
});
off_input.addEventListener("change", () =>{
  offCustom.value = Number(offInput.value);
});


// function to return what off time user chose
function getOffTime(){
  // let offTime = document.querySelector(".offtimeButtons .selectedOff");
  // let offTimeMinutes = offTime.value;
  console.log(offTimeMinutes + " minutes off selected.");
  user.offTime.push(offTimeMinutes);
  return offTimeMinutes;
}
//function to return what on time user chose
function getOnTime(){
//   let onTimeMinutes = document.querySelector(".ontimeButtons .selectedOn").value;
  console.log(onTimeMinutes + " minutes on selected.");
  user.onTime.push(onTimeMinutes);
  return onTimeMinutes;
}

// // create user ID
// function getRandomId() {
//   return Math.floor(Math.random() * 1e6).toString();
// }

// create new user
// function createNewUser() {
//   let user = {
//     id: getRandomId(),
//     onTime: getOnTime(),
//     offTime: getOffTime(),
//   };
//   console.log(user);
//   return user;
// }

// Save list to persistent (browser/local) storage.
function saveList() {
  // Convert list to JSON string.
  let value = JSON.stringify(user);
  // save to localStorage.
  window.localStorage.setItem("user", value);
}



