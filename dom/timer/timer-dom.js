let time = 0;
let running = 0;

let start = document.getElementById('startbtn');
let stop = document.getElementById('stopbtn');
let reset = document.getElementById('resetbtn');

start.onclick = function start() {
    if(running == 0) {
        running = 1;
        increment();
        document.getElementById('startbtn').innerHTML = "Pause";
    }
    else {
        running = 0;
        document.getElementById('startbtn').innerHTML = "Resume";
    }
};
stop.onclick = function stop() {
        running = 0;
        document.getElementById('startbtn').innerHTML = "Resume";
};
reset.onclick = function reset() {
    running = 0;
    document.getElementById('startbtn').innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00"
};
function increment() {
    if(running == 1) {
        setTimeout(function() {
            time++;
            let mins = Math.floor(time/10/60);
            let secs = Math.floor(time/10%60);
            if(mins < 10) {
                mins = "0" + mins;
            }
            if(secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs;
            increment();
        }, 100)
    }
};