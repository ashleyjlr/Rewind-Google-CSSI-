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


let custom_button = document.querySelector("#customButton");
let offButtons = document.querySelectorAll(".offtimeButtons");

let defaultButton = document.querySelectorAll(".defaultO");

// Save list to persistent (browser/local) storage.
function saveList() {
  // Convert list to JSON string.
  let value = JSON.stringify(user);
  // save to localStorage.
  window.localStorage.setItem("currentuser", value);
}

let userInfo = [];
function loadList() {
  // load from local storage if it exists.  
  const userJson = window.localStorage.getItem('currentuser');
  userInfo = JSON.parse(userJson);
  if (userInfo == null) {
    userInfo = [];
  }
}

let user = {
  id: getRandomId(),
  onTime: 25,
  offTime: 5,
  selection: false,
};
if (user.selection = false){
  saveList();
}
console.log("boo")
console.log(user);
console.log(user.selection);
console.log(userInfo);


offButtons.forEach((offtimeButtons) => {
  loadList();
  console.log("hey")
  console.log(user);
  console.log(userInfo);
  console.log(user.selection);
  // if (offtimeButtons.value == user.offTime){
  //   console.log("equal");
  //   offButtons.forEach((offtimeButtons) => {
  //     offtimeButtons.classList.remove("selectedOff");
  //   });
  //   offtimeButtons.classList.add("selectedOff");
  // }
  if (user.selection === false){
    console.log("nihao")
    if (offtimeButtons.value == user.offTime){
      console.log("equal");
      offButtons.forEach((offtimeButtons) => {
        offtimeButtons.classList.remove("selectedOff");
      });
      offtimeButtons.classList.add("selectedOff");
    }
  }
  
  if (offtimeButtons.value == userInfo.offTime){
    console.log("equal");
    offButtons.forEach((offtimeButtons) => {
      offtimeButtons.classList.remove("selectedOff");
    });
    offtimeButtons.classList.add("selectedOff");
  }
  offtimeButtons.addEventListener("click", (e) => {
    user.selection = true;
    userInfo.selection = true;
    offButtons.forEach((offtimeButtons) => {
      offtimeButtons.classList.remove("selectedOff");
    });
    offtimeButtons.classList.add("selectedOff");
    offTimeMinutes = offtimeButtons.value;
    user.offTime = Number(offTimeMinutes);
    userInfo.offTime = Number(offTimeMinutes);
    saveList();
    loadList();
    console.log("click")
    console.log(user);
    console.log(userInfo);
  });
  // if (user.selection === false){
  //   console.log("hi")
  //   if (offtimeButtons.value == user.offTime){
  //     console.log("equal");
  //     offButtons.forEach((offtimeButtons) => {
  //       offtimeButtons.classList.remove("selectedOff");
  //     });
  //     offtimeButtons.classList.add("selectedOff");
  //   }
  // }
});


const onButtons = document.querySelectorAll(".ontimeButtons");

onButtons.forEach((ontimeButtons) => {
  console.log("next")
  loadList();
  console.log(user);
  console.log(userInfo);
  // if (ontimeButtons.value == user.onTime){
  //   console.log("equal");
  //   onButtons.forEach((ontimeButtons) => {
  //     ontimeButtons.classList.remove("selectedOn");
  //   });
  //   ontimeButtons.classList.add("selectedOn");
  // }
  if (user.selection === false){
    if (ontimeButtons.value == user.onTime){
      console.log("equal");
      onButtons.forEach((ontimeButtons) => {
        ontimeButtons.classList.remove("selectedOn");
      });
      ontimeButtons.classList.add("selectedOn");
    }
  }

  
  if (ontimeButtons.value == userInfo.onTime){
    console.log("equal");
    onButtons.forEach((ontimeButtons) => {
      ontimeButtons.classList.remove("selectedOn");
    });
    ontimeButtons.classList.add("selectedOn");
  }
  ontimeButtons.addEventListener("click", (e) => {
    user.selection = true;
    userInfo.selection = true;
    onButtons.forEach((ontimeButtons) => {
      ontimeButtons.classList.remove("selectedOn");
    });
    ontimeButtons.classList.add("selectedOn");
    onTimeMinutes = ontimeButtons.value;
    user.onTime = Number(onTimeMinutes);
    userInfo.onTime = Number(onTimeMinutes);
    saveList();
    loadList();
    console.log("next click")
    console.log(user);
    console.log(userInfo);
  });
  // if (user.selection === false){
  //   console.log("hi")
  //   if (ontimeButtons.value == user.onTime){
  //     console.log("equal");
  //     onButtons.forEach((ontimeButtons) => {
  //       ontimeButtons.classList.remove("selectedOn");
  //     });
  //     ontimeButtons.classList.add("selectedOn");
  //   }
  // }
});


console.log("ok click")
    console.log(user);
    console.log(userInfo);

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




