var pauseTime=1.9;
var myVideo=document.getElementById("vid");
var qOverlay=document.getElementById("questions");
myVideo.defaultPlaybackRate = 1;
myVideo.load();
myVideo.addEventListener('timeupdate', function(){
    if(myVideo.currentTime >= pauseTime){
    myVideo.pause();
    qOverlay.style.display="block";
    }
});

function q(){
    qOverlay.style.display="none";
}




