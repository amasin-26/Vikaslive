var hours = document.getElementById("hours"); 
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");

var start = document.getElementById("startButton");
var lap = document.getElementById("lapButton");

var timerId = false;
var timerOn = false;
var lapsOn = false;

start.addEventListener("click", function(event)
{
  var totalTime = 0;
  if(timerOn) {
    clearInterval(timerId);
    timerOn = false;
    start.innerHTML = "Start";
    lap.innerHTML = "Reset";
    lapsOn = true;
  }
  else {
    timerId = setInterval(function() {
      totalTime++;
    
      minutes.innerHTML = parseInt(totalTime / 60);
      seconds.innerHTML = totalTime % 60;

    }, 1000);

    timerOn = true;
    start.innerHTML = "Stop"
    lap.innerHTML = "Lap";
    lapsOn = false;
  }
  

});

lap.addEventListener("click", function() {
  var laps = document.getElementById("lapse");
  if(lapsOn) {
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";

    while (laps.firstChild) {
        laps.removeChild(laps.firstChild);
    }
  }
  else {
    var item = document.createElement("li");

    var hh = (hours.innerHTML);
    var mm = (minutes.innerHTML);
    var ss = (seconds.innerHTML);

    console.log(hh, mm, ss);
    item.innerHTML = `${hh} : ${mm} :${ss}`;

    var elem = document.createElement("hr");
    elem.setAttribute("width", "100%");

    laps.appendChild(elem);
    laps.append(item); 
  }
});