const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play/Pause Video
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

//update play/pause icon
function updatePlayIcon() {
  return true;
}

//update progress & timestamp
function updateProgress() {

}

//Set video time to progress
function setVideoProgress() {
  return true;
}

function stopVideo(){
  return true;
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress)
