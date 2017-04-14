const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  if (seconds === 0) {
    secondHand.style.transition = 'transform 0s';  
  } else if (seconds === 1) {
    secondHand.style.transition = 'transform 0.05s';
  }
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;  
}

setInterval(setDate, 1000);
