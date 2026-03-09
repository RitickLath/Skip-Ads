let userSelectedSpeed = 1;

function fastforwardAds() {

  const platform = window.location.hostname;

  let adPlaying = false;

  if (platform.includes("youtube")) {

    adPlaying = !!document.querySelector(".ad-showing");

  } 
  else if (platform.includes("hotstar")) {

    const adContainer = document.getElementById("ad-video-container");

    if (adContainer && adContainer.children.length > 0) {
      adPlaying = true;
    }

  } else {
    return; // unsupported site
  }

  const video = document.querySelector("video");

  if (!video) return;

  if (adPlaying) {

    if (video.playbackRate !== 10) {

      userSelectedSpeed = video.playbackRate;

      console.log("Ad detected → speeding up");

      video.playbackRate = 10;

    }

  } else {

    if (video.playbackRate !== userSelectedSpeed) {
      video.playbackRate = userSelectedSpeed;
    }

  }

}

setInterval(fastforwardAds, 1000);