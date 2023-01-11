const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = "1 jan 2024";

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const Totalseconds = Math.floor((newYearsDate - currentDate) / 1000);
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor(Totalseconds / 3600) % 24;
  const minutes = Math.floor((Totalseconds / 60) % 60);
  const seconds = Math.floor(Totalseconds % 60);
  console.log(days, hours, minutes, seconds);
  daysEl.innerHTML = TimeFormate(days);
  hoursEl.innerHTML = TimeFormate(hours);
  minsEl.innerHTML = TimeFormate(minutes);
  secondsEl.innerHTML = TimeFormate(seconds);
}

function TimeFormate(time) {
  return time < 10 ? `0${time}` : time;
}
//initial count
// countdown();

setInterval(countdown, 1000);
