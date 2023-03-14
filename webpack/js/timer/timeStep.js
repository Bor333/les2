import { printTime } from './printTime.js';
import { timerShow } from './main.js';
import { timeMinut } from './main.js';
import { timerOn } from './main.js';

export const timeStep = (timerInput, timerShow) => { 
    // let timerShow = document.getElementById("timer"); 
    // let timerInput = document.getElementById("time");
    let timeMinut = parseInt(timerInput.value) * 60;
  
    const timer = setInterval(function () {
      let seconds = timeMinut % 60;
      let minutes = timeMinut / 60 % 60;
      let hour = timeMinut / 60 / 60 % 60;
  
      if (!timerOn) clearInterval(timer);

      if (timeMinut <= 0) {
        clearInterval(timer);
        timerShow.innerText= "Время закончилось";
      } else if (timerOn) {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
      }
      --timeMinut;
    }, 1000)
  }

