const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const fullScreen = document.getElementById('fullScreen');


//Play/Pause Video
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

//update play/pause icon
function updatePlayIcon() {
 if (video.paused) {
   play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
 } else {
   play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
 }
}

//update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100
  if (video.currentTime === video.duration) video.currentTime = 0;
 
  //Get minutes
  let mins = Math.floor(video.currentTime / 60);
  mins = mins < 10 ? "0" + mins : mins;
  let secs = Math.floor(video.currentTime % 60);
  secs = secs < 10 ? "0" + secs : secs;
  timestamp.innerHTML = `${mins}:${secs}`;
}

//Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo(){
  video.currentTime = 0;
  video.pause();
}

function poster(){
  video.load()
  progress.value = 0;
}

function changeScreen(){
  video.webkitRequestFullscreen()
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('ended', poster)
play.addEventListener('click', toggleVideoStatus);

video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress)
fullScreen.addEventListener('click', changeScreen);


