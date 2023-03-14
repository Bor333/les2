import {Howl, Howler} from './howler.js';
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


const sound = new Howl({
  src: ['sounds.mp3']
});

// // Shoot the laser!
sound.play();


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
  //  timer.classList.remove("hidden");
  //  datecalc.classList.add("hidden");
  // console.log('coo');
  
  // buttonSwitch.hidden = true;
});

switchDatecalc.addEventListener('click', () => {
  timer.hidden = true;
  datecalc.hidden = false;
  
});
