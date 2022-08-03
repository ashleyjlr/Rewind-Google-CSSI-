const menuBtn = document.querySelector('.menu-btn');
let menuLine = document.querySelectorAll(".menu-btn_find");
let logoWord = document.querySelector("#logo_words");
let sideBar = document.querySelector("#side_bar");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
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

window.onload = () => {
  const song_img_el = document.querySelector('#song-image');
  const song_title_el = document.querySelector('#song-title');
  const song_artist_el = document.querySelector('#song-artist');
  const song_next_up_el = document.querySelector('#song-next-up');

  const play_btn = document.querySelector('#play-btn');
  const play_btn_icon = document.querySelector('#play-icon');
  const prev_btn = document.querySelector('#prev-btn');
  const next_btn = document.querySelector('#next-btn');

  // querySelector
  //    by type: "<NAME_OF_TYPE>"
  //    by id: "#<ID>"
  //    by class: ".<CLASS_NAME>"
  const audio_player = document.querySelector('#music-player');
  console.log(audio_player);

  let current_song_index;
  let next_song_index;

  let songs = [
    {
      title: 'Miss Jagger (feat. Kamille)',
      artist: 'Lotto Boyzz',
      song_path: 'music/Miss Jagger.mp3',
      img_path: 'images/song-1.jpg'
    },
    {
      title: 'Consideration (Feat. Sza)',
      artist: 'Rihanna',
      song_path: 'music/Consideration.mp3',
      img_path: 'images/song-2.jpg'
    },
    {
      title: 'Lovely (Feat. Khalid)',
      artist: 'Billie Eilish',
      song_path: 'music/Lovely.mp3',
      img_path: 'images/song-3.png'
    },
    {
      title: 'Low (Feat Tega Gates & Belle)',
      artist: 'Rhymez The Martian',
      song_path: 'music/Low.mp3',
      img_path: 'images/song-4.jpeg'
    }
  ]

  play_btn.addEventListener('click', TogglePlaySong);
  next_btn.addEventListener('click', () => ChangeSong());
  prev_btn.addEventListener('click', () => ChangeSong(false));

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

  function TogglePlaySong() {
    if (audio_player.paused) {
      audio_player.play();
      play_btn_icon.classList.remove('fa-play');
      play_btn_icon.classList.add('fa-pause');
    } else {
      audio_player.pause();
      play_btn_icon.classList.add('fa-play');
      play_btn_icon.classList.remove('fa-pause');
    }
  }


  function ChangeSong(next = true) {
    if (next) {
      current_song_index++;
      next_song_index = current_song_index + 1;

      if (current_song_index > songs.length - 1) {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
      }

      if (next_song_index > songs.length - 1) {
        next_song_index = 0
      }
    } else {
      current_song_index--;
      next_song_index = current_song_index + 1;

      if (current_song_index < 0) {
        current_song_index = songs.length - 1;
        next_song_index = 0;
      }
    }

    UpdatePlayer();
    TogglePlaySong();
  }
}