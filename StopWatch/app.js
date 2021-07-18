let minute = 0;
let second = 0;
let tens = 0;
const appendMinute = document.getElementById("minute");
const appendSecond = document.getElementById("second");
const appendTens = document.getElementById("tens");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
let interval;
function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    second++;
    appendSecond.innerHTML = "0" + second;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
  }
  if (second > 9) {
    appendSecond.innerHTML = second;
  }
  if (second > 59) {
    minute++;
    appendMinute.innerHTML = "0" + minute;
    second = 0;
    appendSecond.innerHTML = "0" + second;
  }
  if (minute > 9) {
    appendMinute.innerHTML = minute;
  }
}
start.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});
pause.addEventListener("click", () => {
  clearInterval(interval);
});
reset.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  second = "00";
  minute = "00";
  appendTens.innerHTML = tens;
  appendSecond.innerHTML = second;
  appendMinute.innerHTML = minute;
});
