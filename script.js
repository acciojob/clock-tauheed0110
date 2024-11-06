const displayTimer = document.getElementById("timer");

let currentDate = new Date();

setInterval(function(){
    // get the current date
    currentDate = new Date();
    // update date in a second
    displayTimer.textContent = currentDate.toLocaleString();
}, 1000);