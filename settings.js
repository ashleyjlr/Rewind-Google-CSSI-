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
  onTime: 25,
  offTime: 5,
};

let custom_button = document.querySelector("#customButton");
const offButtons = document.querySelectorAll(".offtimeButtons");


offButtons.forEach((offtimeButtons) => {
  offtimeButtons.addEventListener("click", (e) => {
    offButtons.forEach((offtimeButtons) => {
      offtimeButtons.classList.remove("selectedOff");
    });
    offtimeButtons.classList.add("selectedOff");
    offTimeMinutes = offtimeButtons.value;
    user.offTime = Number(offTimeMinutes);
    console.log(user);
    saveList();
    console.log(user);
  });
});

const onButtons = document.querySelectorAll(".ontimeButtons");

onButtons.forEach((ontimeButtons) => {
  ontimeButtons.addEventListener("click", (e) => {
    onButtons.forEach((ontimeButtons) => {
      ontimeButtons.classList.remove("selectedOn");
    })
    ontimeButtons.classList.add("selectedOn");
    onTimeMinutes = ontimeButtons.value;
    user.onTime = Number(onTimeMinutes);
    console.log(user);
    saveList();
    console.log(user);
  });
});

let on_input = document.querySelector("#onInput");
let off_input = document.querySelector("#offInput");

on_input.addEventListener("change", () =>{
  onTimeMinutes = onInput.value;
  user.onTime = Number(onTimeMinutes);
  console.log(user);
  saveList();
});
off_input.addEventListener("change", () =>{
  offTimeMinutes = offInput.value;
  user.offTime = Number(offTimeMinutes);
  console.log(user);
  saveList();
});

// Save list to persistent (browser/local) storage.
function saveList() {
  // Convert list to JSON string.
  let value = JSON.stringify(user);
  // save to localStorage.
  window.localStorage.setItem("user", value);
}



