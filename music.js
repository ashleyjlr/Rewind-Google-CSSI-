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

const song_img_el = document.getElementbyId('song_ image');
const song_title_el = document.getElementById('song_title');
const song_artist_el = document.getElementbyId('song_artist');
const song_next_up_el = document.getElementById('song-next-up');

const play_btn = document.getElementById('play-btn');
const play_btn_icon = document.getElementById('play-icon');
const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next_btn');

const audio_player = document.getElementId('music-player');

let current_song_index;
let next_song_index;

let songs = [
  {
    title: 'Somebody New',
    artist: 'RYYZN',
    song_path: 'music/somebody-new.mp3',
    img_path: 'images/song-1.jpg'
  },
  {
    title: 'On and On ft. Daniel Levi',
    artist: 'Cartoon',
    song_path: 'music/on-n-on.mp3',
    img_path: 'images/song-2.jpg'
  }
]

play_btn.addEventListener('click' , TogglePlaySong);

InitPlayer();

function InitPlayer() {
  current_song_index = 0;
  next_song_index = current_song_index + 1;
  UpdatePlayer();
}

function UpdatePlayer() {
  let song = songs[current_song_index];

  song_img_el.style = "background-image: url('" + song.img_path + "')";
  song_title_el.innerText = song.title;
  song_artist_el.innerText = song.artist;

  song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

  audio_player.src = song.song_path;
} 

function TogglePlaySong () {
  if (audio_player.paused) {
    audio_player.play();
    play_btn_icon.classList.remove('fa-play');
    play_btn_icon.classList.add('fa-pause');
  } else {
      audio_player.pause();
      play_btn_icon.classList.add
  }
}

