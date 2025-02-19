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
const back = document.getElementById("back");
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

// Show Random Music //

function showRandomMusic() {
  let randomId = Math.floor(Math.random() * 5) + 1;
  media.forEach((item) => {
    if (randomId === item.id) {
      cover.src = item.cover;
      musicName.innerHTML = item.musicName;
      singer.innerHTML = item.singer;
      audio.src = item.src;

      if (item.like) {
        like.classList.add("hidden");
        dislike.classList.remove("hidden");
      }
    }
  });
}

// Play Music //

play.addEventListener("click", () => {
  audio.load();
  audio.play();

  play.classList.add("hidden");
  pause.classList.remove("hidden");
});

// Window //

window.addEventListener("load", () => {
  showRandomMusic();
});
