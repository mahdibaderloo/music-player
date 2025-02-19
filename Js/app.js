import { media } from "../Js/data-base.js";

// Variables //

let index = 0;

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
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const repeat = document.getElementById("repeat");
const repeatOne = document.getElementById("repeat-one");
const shuffle = document.getElementById("shuffle");

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

  if (media[index].like) {
    like.classList.add("hidden");
    dislike.classList.remove("hidden");
  }
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

// Window //

window.addEventListener("load", () => {
  showMusic();
});
