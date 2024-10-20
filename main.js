// Set the date we're counting down to (15 days from now)
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 20);

// Update the countdown every 1 second
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with id="days", "hours", etc.
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // If the countdown is over, stop the interval
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = "We're Live!";
  }
}, 1000);

