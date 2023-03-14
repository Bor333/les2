// import {Howl} from './howler.js';
import { timeStep } from './timeStep.js';

export const timerShow = document.getElementById("timerShow");
const timerInput = document.getElementById("time");
const buttonRun = document.getElementById("button");
const buttonStop = document.getElementById("stop");
const timer = document.getElementById("timer");
timer.hidden = true;
const switchTimer = document.getElementById("switchTimer");
const switchDatecalc = document.getElementById("switchDatecalc");
const datecalc = document.getElementById("datecalc");
export let timerOn = false;
// let timer = null;


// const sound = new Howl({
//   src: ['sounds.webm', 'sounds.mp3'],
//   sprite: {
//     blast: [0, 3000],
//     laser: [4000, 1000],
//     winner: [6000, 5000]
//   }
// });

// // Shoot the laser!
// sound.play('laser');
export let timeMinut = 0;

buttonRun.addEventListener('click', () => {
  if (timerOn == false) {
    timeMinut = parseInt(timerInput.value) * 60;
    timerOn = true;
    const timer = setInterval(timeStep(timerInput, timerShow), 1000)
  }
});

buttonStop.addEventListener('click', () => {
  timerOn = false;
  // timer = null;
  timerShow.innerHTML = null;
});

switchTimer.addEventListener('click', () => {
  datecalc.hidden = true;
  timer.hidden = false;
  // buttonSwitch.hidden = true;
});

switchDatecalc.addEventListener('click', () => {
  timer.hidden = true;
  datecalc.hidden = false;
});
