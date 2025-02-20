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

function showMusic() {
  cover.src = media[index].cover;
  musicName.innerHTML = media[index].musicName;
  singer.innerHTML = media[index].singer;
  audio.src = media[index].src;

  changeLike();
}

// Play Music //

play.addEventListener("click", () => {
  playMusic();
});

function playMusic() {
  audio.load();
  audio.play();

  play.classList.add("hidden");
  pause.classList.remove("hidden");
}

// Pause Music //

pause.addEventListener("click", () => {
  audio.pause();

  play.classList.remove("hidden");
  pause.classList.add("hidden");
});

// Next Music //

next.addEventListener("click", () => {
  index++;
  if (index === media.length) {
    index = 0;
  }
  showMusic();
  playMusic();
});

// Prev Music //

prev.addEventListener("click", () => {
  index--;
  if (index === -1) {
    index = media.length - 1;
  }
  showMusic();
  playMusic();
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
             <li id="${item.id}" class="flex items-center gap-3 shadow p-1 mb-1.5 cursor-pointer">
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

// Window //

window.addEventListener("load", () => {
  showMusic();
});
