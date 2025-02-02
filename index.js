const countRef = document.getElementById('time');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning)
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
};

function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;  
    }
};

function reset(){
    if(isRunning)
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        countRef.textContent = "00:00:00"
}
    
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; 

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    countRef.textContent = `${hours}:${minutes}:${seconds}`
};

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);