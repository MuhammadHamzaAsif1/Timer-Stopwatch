let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId = null;

function counterIncrementer(){
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("timer").textContent = 
    `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer(){
    if(!timerId){
        timerId = setInterval(counterIncrementer, 1000);
    }
}

function stopTimer(){
    clearInterval(timerId);
    timerId = null;
}

function resetTimer(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").textContent = "00:00:00";
}
