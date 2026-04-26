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
var wrongCount=0;
var rightCount=0;
var nextButton=document.getElementById("nButton");


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
    rightCount++;
    document.getElementById("ballCount").innerText=rightCount;
    document.getElementById("nButton").style.display="block";
    
}
function next() {
    nextButton.style.display = "none";
    myVideo.play();
    pauseTime+=3;
    qOverlay.style.display="none";
    rightOverlay.style.display="none";
    wrongOverlay.style.display="none";
     if (rightCount == 4) {
        myVideo.style.display = "none";
        qOverlay.style.display = "none";
        document.getElementById("nButton").style.display = "none";
        document.getElementById("wonScreen").style.display = "block";
    }
}

function wrong() {
    q();
    wrongOverlay.style.display = "block";
    selectedSafe = false;
    selectedOut = false;
    wrongCount++;
    document.getElementById("strikeCount").innerText=wrongCount;
    document.getElementById("nButton").style.display="block";
    if(wrongCount==3){
        myVideo.style.display = "none";
        qOverlay.style.display = "none";
        document.getElementById("nButton").style.display = "none";
        document.getElementById("lostScreen").style.display = "block";
    }
}


