let userSelectedSpeed = 1;

function pauseVideo() {

  const video = document.querySelector("video");
  const adPlaying = document.querySelector(".ad-showing");

  if (!video) return;

  if (adPlaying) {
    // To make sure the speed is not 10 already otherwise the userSpeed is misguided.
    if(video.playbackRate !== 10){
      // store the user selected speed
      userSelectedSpeed = video.playbackRate;
      // speed up the video
      console.log("Ad detected → speeding up");
      video.playbackRate = 10;
    }
    
  } else {
    // set the user selected speed
    if(video.playbackRate !== userSelectedSpeed){
      video.playbackRate = userSelectedSpeed;
    }
  }

}

setInterval(pauseVideo, 1000);