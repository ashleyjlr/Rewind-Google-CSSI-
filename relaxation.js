const menuBtn = document.querySelector('.menu-btn');
let menuLine = document.querySelectorAll(".menu-btn_find");
let logoWord = document.querySelector("#logo_words");
let sideBar = document.querySelector("#side_bar");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    sideBar.style.display = "flex";
    logoWord.style.color = "white";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    sideBar.style.display = "none";
    logoWord.style.color = "#335145";
    menuOpen = false;
  }
});

// This will be a json
const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getData');
const response = fetch("https://api.adviceslip.com/advice").then(response => {
  return response.json();
})
// const data = await response.json();
//    console.log(data);
// Go within the response to get the advice variable
console.log(response)