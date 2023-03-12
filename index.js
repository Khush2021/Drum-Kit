
//sounds object
let sounds = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
};

//click event listener
function drumClick() {
  let audio = new Audio(sounds[this.innerText]);
  audio.play();
  addAnimation(this.innerText);
}

//keypress event listener
function keyPress(event) {
  console.log(event.key.toLowerCase());
  let audio = new Audio(sounds[event.key.toLowerCase()]);
  audio.play();
  addAnimation(event.key.toLowerCase());
}

let drum_btns = document.querySelectorAll(".drum");

//mouse click
for (let i = 0; i < drum_btns.length; i++) {
  drum_btns[i].addEventListener("click", drumClick);
}

//keyboard press (adding eventlistener to whole page)
document.addEventListener("keydown", keyPress);

//adding animation
function addAnimation(key){
  console.log(key);
  let btn = document.querySelector("." + key.toLowerCase());
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 100);
}