function pauseVideo() {

  const video = document.querySelector("video");
  const adPlaying = document.querySelector(".ad-showing");

  if (video) {

    if (adPlaying) {
      console.log("Ad detected → speeding up");
      video.playbackRate = 10;
    } else {
      video.playbackRate = 1;
    }

  }

}

setInterval(pauseVideo, 1000);