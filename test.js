var pauseTime=3;
var selectedSafe = false
var selectedOut = false
const a = ["s", "o", "o", "s", "o", "o", "s", "o", "o", "s", "s"];
var index = 0;
var myVideo=document.getElementById("vid");
var qOverlay=document.getElementById("questions");
var rightOverlay =document.getElementById("rOverlay");
var wrongOverlay =document.getElementById("wOverlay");
var LoseOverlay =document.getElementById("gOverlay");
var count=0;
myVideo.defaultPlaybackRate = 1;
myVideo.load();
myVideo.addEventListener('timeupdate', function(){
    if(myVideo.currentTime >= pauseTime){
    myVideo.pause();
    qOverlay.style.display="block";
    }
});

function isCorrect() {
    if (a[index] === "s" && selectedSafe) {
        index++;
        return true;
    }
    else if (a[index] === "o" && selectedOut) {
        index++;
        return true;
    }
    index++;
    return false;
}

function q() {
    qOverlay.style.display = "none";
}


function gameOver() {
    LoseOverlay.style.display = "block";
}


function safe() {
    selectedSafe = true;
    if (isCorrect()) {
        right();
    }
    else {
        wrong();
    }
}


function out() {
    selectedOut = true;
    if (isCorrect()) {
        right();
    }
    else {
        wrong();
        
    }
}


function right() {
    rightOverlay.style.display = "block";
    selectedSafe = false;
    selectedOut = false;
    count++;
        document.getElementById("ballCount").innerText=count;
    
}


function wrong() {
    q()
    wrongOverlay.style.display = "block";
    selectedSafe = false;
    selectedOut = false;
    count++;
        document.getElementById("strikeCount").innerText=count;
}
