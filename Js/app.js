import { media } from "../Js/data-base.js";

// DOM Elements //

const cover = document.getElementById("cover");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const musicName = document.getElementById("music-name");
const singer = document.getElementById("singer");
const audio = document.querySelector("audio");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progress");
const progressBarBox = document.getElementById("progress-box");
const playlist = document.getElementById("playlist");
const playlistBox = document.getElementById("playlist-box");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const repeat = document.getElementById("repeat");
const repeatOne = document.getElementById("repeat-one");
const shuffle = document.getElementById("shuffle");

// Variables //

let index = 0;
let isPlaying = false;
let currentMusicTime = 0;

// Dark And Light Mode //

dark.addEventListener("click", () => {
  let htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.classList.add("dark");
  light.classList.remove("hidden");
});

light.addEventListener("click", () => {
  let htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.classList.remove("dark");
  light.classList.add("hidden");
});

// Show Music //

function showMusic(index) {
  audio.src = media[index].src;
  cover.src = media[index].cover;
  musicName.innerHTML = media[index].musicName;
  singer.innerHTML = media[index].singer;

  changeLike();
}

// Play Music //

play.addEventListener("click", () => {
  playMusic();
});

function playMusic() {
  currentMusicTime = 0;
  audio.currentTime = currentMusicTime;
  audio.play();
  isPlaying = true;

  play.classList.add("hidden");
  pause.classList.remove("hidden");
}

// Pause Music //

pause.addEventListener("click", () => {
  pauseMusic();
});

function pauseMusic() {
  audio.pause();
  isPlaying = false;

  play.classList.remove("hidden");
  pause.classList.add("hidden");
}

// Next Music //

next.addEventListener("click", () => {
  nextMusic();
});

function nextMusic() {
  if (!shuffle.classList.contains("hidden")) {
    shufflePlay();
  } else {
    index++;
    if (index === media.length) {
      index = 0;
    }
    showMusic(index);
    currentMusicTime = 0;
    audio.currentTime = currentMusicTime;
    playMusic();
  }
}

// Prev Music //

prev.addEventListener("click", () => {
  if (!shuffle.classList.contains("hidden")) {
    shufflePlay();
  } else {
    index--;
    if (index === -1) {
      index = media.length - 1;
    }
    showMusic(index);
    currentMusicTime = 0;
    audio.currentTime = currentMusicTime;
    playMusic();
  }
});

// Repeat //

repeat.addEventListener("click", () => {
  repeat.classList.add("hidden");
  repeatOne.classList.remove("hidden");
  shuffle.classList.add("hidden");
});

repeatOne.addEventListener("click", () => {
  repeat.classList.add("hidden");
  repeatOne.classList.add("hidden");
  shuffle.classList.remove("hidden");
});

shuffle.addEventListener("click", () => {
  repeat.classList.remove("hidden");
  repeatOne.classList.add("hidden");
  shuffle.classList.add("hidden");
});

function repeatOneMusic() {
  let currentIndex = index;
  showMusic(currentIndex);
  playMusic();
}

function shufflePlay() {
  let randomIndex = Math.floor(Math.random() * media.length);
  index = randomIndex;
  showMusic(randomIndex);
  playMusic();
}

// Playlist //

playlist.addEventListener("click", () => {
  if (cover.classList.contains("hidden")) {
    cover.classList.remove("hidden");
    playlistBox.classList.add("hidden");
  } else {
    cover.classList.add("hidden");
    playlistBox.classList.remove("hidden");

    playlistBox.innerHTML = "";
    media.forEach((item) => {
      createPlaylist(item);
    });
  }
});

function createPlaylist(item) {
  playlistBox.insertAdjacentHTML(
    "beforeend",
    `
             <li id="${item.id}" class="flex items-center gap-3 shadow p-1 mb-2 rounded-xl cursor-pointer" onclick="selectMusic(this)">
            <img src="${item.cover}" alt="" class="w-14 h-14 rounded-lg" />
            <div>
              <p class="font-bold dark:text-white">${item.musicName}</p>
              <p class="text-sm dark:text-slate-400">${item.singer}</p>
            </div>
          </li>
    `
  );
}

// Like //

like.addEventListener("click", () => {
  let findItem = media.find(
    (item) =>
      item.cover === cover.src && item.musicName === musicName.textContent
  );
  findItem.like = true;
  changeLike();
});

dislike.addEventListener("click", () => {
  let findItem = media.find(
    (item) =>
      item.cover === cover.src && item.musicName === musicName.textContent
  );
  findItem.like = false;
  changeLike();
});

function changeLike() {
  if (media[index].like) {
    like.classList.add("hidden");
    dislike.classList.remove("hidden");
  } else {
    like.classList.remove("hidden");
    dislike.classList.add("hidden");
  }
}

// Select Music //

function selectMusic(el) {
  index = el.id - 1;

  let elementPic = el.children[0].src;
  let elementMusicName = el.children[1].children[0].textContent;

  if (elementPic !== cover.src && elementMusicName !== musicName.textContent) {
    currentMusicTime = 0;
    audio.currentTime = currentMusicTime;
  }

  showMusic(index);
  playMusic();
  cover.classList.remove("hidden");
  playlistBox.classList.add("hidden");
}

// Show Music Duration //

function showDuration(e) {
  const musicDuration = e.srcElement.duration;

  let durationMinutes = Math.floor(musicDuration / 60);
  let durationSeconds = Math.floor(musicDuration % 60);

  if (durationSeconds < 10) {
    durationSeconds = "0" + durationSeconds;
  }

  if (durationSeconds) {
    duration.innerHTML = durationMinutes + ":" + durationSeconds;
  }
}

// Update Duration //

function updateProgressBar(e) {
  const musicDuration = e.srcElement.duration;

  if (isPlaying) {
    currentMusicTime = e.srcElement.currentTime;
    const progressPercent = (currentMusicTime / musicDuration) * 100;
    progressBar.style.width = progressPercent + "%";

    const currentMinutes = Math.floor(currentMusicTime / 60);
    let currentSeconds = Math.floor(currentMusicTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTime.textContent = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar //

progressBarBox.addEventListener("click", setProgressBar);

function setProgressBar(e) {
  playMusic();
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Audio Element //

audio.addEventListener("loadeddata", showDuration);
audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", () => {
  if (!repeatOne.classList.contains("hidden")) {
    console.log("repeat");
    repeatOneMusic();
  } else if (!shuffle.classList.contains("hidden")) {
    shufflePlay();
  } else {
    nextMusic();
  }
});

// Window //

window.addEventListener("load", () => {
  showMusic(index);
});

window.selectMusic = selectMusic;
