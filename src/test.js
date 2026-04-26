var pauseTime=1.9;
var myVideo=document.getElementById("vid");
var qOverlay=document.getElementById("questions");
var rightOverlay =document.getElementById("rOverlay");
var wrongOverlay =document.getElementById("wOverlay");
var LoseOverlay =document.getElementById("gOverlay");
myVideo.defaultPlaybackRate = 1;
myVideo.load();
myVideo.addEventListener('timeupdate', function(){
    if(myVideo.currentTime >= pauseTime){
    myVideo.pause();
    qOverlay.style.display="block";
    }
});

function q() {
    qOverlay.style.display = "none";
}

function gameOver() {
    LoseOverlay.style.display = "block";
}

function right() {
    rightOverlay.style.display = "block";
}

function wrong() {
    wrongOverlay.style.display = "block";
}