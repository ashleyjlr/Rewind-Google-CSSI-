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

// game 1
let g1Reveal = document.querySelector('#game1');
let g1Game = document.querySelector('#game1game');
let g1Button = document.querySelector('#game1btn');
let g1Img = document.querySelector('#game1img')

let button1click = 0;

g1Button.addEventListener("click", (e) => {
  button1click++;
  if (button1click%2 === 1){
    g1Game.removeAttribute('style');
	  g1Img.style.display = "none";
	  console.log(button1click);
	  document.getElementById("game1btn").innerHTML = "Close game!";
    document.getElementById("game1game").innerHTML = ' <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1142/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>';
	    }
	else if (button1click%2 === 0){
	  g1Img.removeAttribute('style');
	  g1Game.style.display = "none";
	  console.log(button1click);
	  document.getElementById("game1btn").innerHTML = "Play now!";
    document.getElementById("game1game").innerHTML = g1Img;
	}
});
	 

// game 2
let g2Reveal = document.querySelector('#game2');
let g2Game = document.querySelector('#game2game');
let g2Button = document.querySelector('#game2btn');
let g2Img = document.querySelector('#game2img')

let button2click = 0;

g2Button.addEventListener("click", (e) => {
  button2click++;
  if (button2click%2 === 1){
    g2Game.removeAttribute('style');
	  g2Img.style.display = "none";
	  console.log(button2click);
	  document.getElementById("game2btn").innerHTML = "Close game!";
    document.getElementById("game2game").innerHTML = '<iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/274/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>';
	    }
	else if (button2click%2 === 0){
	  g2Img.removeAttribute('style');
	  g2Game.style.display = "none";
	  console.log(button2click);
	  document.getElementById("game2btn").innerHTML = "Play now!";
    document.getElementById("game2game").innerHTML = g2Img;
	}
});

// game 3
let g3Reveal = document.querySelector('#game3');
let g3Game = document.querySelector('#game3game');
let g3Button = document.querySelector('#game3btn');
let g3Img = document.querySelector('#game3img')

let button3click = 0;

g3Button.addEventListener("click", (e) => {
  button3click++;
  if (button3click%2 === 1){
    g3Game.removeAttribute('style');
	  g3Img.style.display = "none";
	  console.log(button3click);
	  document.getElementById("game3btn").innerHTML = "Close game!";
    document.getElementById("game3game").innerHTML = '<iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>';
	    }
	else if (button3click%2 === 0){
	  g3Img.removeAttribute('style');
	  g3Game.style.display = "none";
	  console.log(button3click);
	  document.getElementById("game3btn").innerHTML = "Play now!";
    document.getElementById("game3game").innerHTML = g3Img;
	}
});




// game 4
let g4Reveal = document.querySelector('#game4');
let g4Game = document.querySelector('#game4game');
let g4Button = document.querySelector('#game4btn');
let g4Img = document.querySelector('#game4img')

let button4click = 0;

g4Button.addEventListener("click", (e) => {
  button4click++;
  if (button4click%2 === 1){
    g4Game.removeAttribute('style');
	  g4Img.style.display = "none";
	  console.log(button4click);
	  document.getElementById("game4btn").innerHTML = "Close game!";
    document.getElementById("game4game").innerHTML = '<iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/24/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>';
	    }
	else if (button4click%2 === 0){
	  g4Img.removeAttribute('style');
	  g4Game.style.display = "none";
	  console.log(button4click);
	  document.getElementById("game4btn").innerHTML = "Play now!";
    document.getElementById("game4game").innerHTML = g4Img;
	}
});


// 
document.getElementById('button1').addEventListener("click", function() {
	document.querySelector('#bg-modal1').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('#bg-modal1').style.display = "none";
});


document.getElementById('button2').addEventListener("click", function() {
	document.querySelector('#bg-modal2').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('#bg-modal2').style.display = "none";
});

document.getElementById('button3').addEventListener("click", function() {
	document.querySelector('#bg-modal3').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('#bg-modal3').style.display = "none";
});

document.getElementById('button4').addEventListener("click", function() {
	document.querySelector('#bg-modal4').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('#bg-modal4').style.display = "none";
});



