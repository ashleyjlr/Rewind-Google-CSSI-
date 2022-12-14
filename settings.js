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

function saveList() {
  let value = JSON.stringify(user);
  window.localStorage.setItem("user", value);
}

let userInfo = [];
function loadList() {  
  const userJson = window.localStorage.getItem('user');
  userInfo = JSON.parse(userJson);
  if (userInfo == null) {
    userInfo = [];
  }
}

let user = {
  onTime: 25,
  offTime: 5,
};

let custom_button = document.querySelector("#customButton");
let offButtons = document.querySelectorAll(".offtimeButtons");
let onButtons = document.querySelectorAll(".ontimeButtons");

function offAddColor(){
  offButtons.forEach((offtimeButtons) => {
    if (offtimeButtons.value == userInfo.offTime){
      // console.log("equal");
      offButtons.forEach((offtimeButtons) => {
        offtimeButtons.classList.remove("selectedOff");
      });
      offtimeButtons.classList.add("selectedOff");
    }
  });
}
function onAddColor(){
  onButtons.forEach((ontimeButtons) => {
    if (ontimeButtons.value == userInfo.onTime){
      // console.log("equal");
      onButtons.forEach((ontimeButtons) => {
        ontimeButtons.classList.remove("selectedOn");
      });
      ontimeButtons.classList.add("selectedOn");
    }
  });
}

loadList();
console.log("hello");
console.log(userInfo);
offAddColor();
onAddColor();

offButtons.forEach((offtimeButtons) =>{
  console.log("hey")
  console.log(user);
  console.log(userInfo);
  offtimeButtons.addEventListener("click", (e) => {
    offButtons.forEach((offtimeButtons) => {
      offtimeButtons.classList.remove("selectedOff");
    });
    offtimeButtons.classList.add("selectedOff");
    offTimeMinutes = offtimeButtons.value;
    user.offTime = Number(offTimeMinutes);
    userInfo.offTime = Number(offTimeMinutes);
    // console.log(user.offTime)
    // console.log(userInfo.offTime)
    saveList();
    loadList();
    console.log("click")
    console.log(user);
    console.log(userInfo);
  });
});


onButtons.forEach((ontimeButtons) =>{
  console.log("heyy")
  console.log(user);
  console.log(userInfo);
  ontimeButtons.addEventListener("click", (e) => {
    onButtons.forEach((ontimeButtons) => {
      ontimeButtons.classList.remove("selectedOn");
    });
    ontimeButtons.classList.add("selectedOn");
    onTimeMinutes = ontimeButtons.value;
    user.onTime = Number(onTimeMinutes);
    userInfo.offTime = Number(offTimeMinutes);
    // console.log(user.offTime)
    // console.log(userInfo.offTime)
    saveList();
    loadList();
    console.log("click")
    console.log(user);
    console.log(userInfo);
  });
});

let on_input = document.querySelector("#onInput");
let off_input = document.querySelector("#offInput");

on_input.addEventListener("change", () =>{
  onTimeMinutes = on_input.value;
  user.onTime = Number(onTimeMinutes);
  console.log(user);
  saveList();
});
off_input.addEventListener("change", () =>{
  offTimeMinutes = off_input.value;
  user.offTime = Number(offTimeMinutes);
  console.log(user);
  saveList();
});