// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var settime = new Date();
    var clock1 = settime.getHours();
    var clock2 = settime.getMinutes();
    var clock3 = settime.getSeconds();
    hours.innerHTML = clock1;
    minutes.innerHTML = clock2;
    seconds.innerHTML = clock3;
  }
  setInterval(clock, 1000);