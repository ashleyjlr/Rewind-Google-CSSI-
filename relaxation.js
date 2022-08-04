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

resBtn.addEventListener('click', () => {
  getAdvice();
})

window.onload = () => {
  getAdvice();
}

function getAdvice(){
  fetch('https://api.adviceslip.com/advice').then(response => {
  return response.json();
}).then(adviceData => {
  const Adviceobj = adviceData.slip;
  resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
}).catch(error => {
  console.log(error);
});
// const data = await response.json();
//    console.log(data);
// Go within the response to get the advice variable
console.log(response)
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}