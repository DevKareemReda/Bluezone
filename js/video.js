// ! ================== video modal ==================
let popupVideo = document.querySelector(".popup-video");
let modalVideo = document.querySelector(".modal-video");
let videoPlayer = document.querySelector(".modal-video .video-player");
let closeVideo = document.querySelector("span.close");

popupVideo.onclick = function(e) {
    e.preventDefault();
    this.nextElementSibling.classList.add("active")
}

closeVideo.onclick = function(e) {
    this.parentElement.classList.remove("active")
}

window.onclick = function(e) {
    if (e.target === modalVideo)
        modalVideo.classList.remove("active")
    	stopVideo();
}

window.onkeydown = function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        modalVideo.classList.remove("active")
    	stopVideo();
    }
}

function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

window.onload = function() {
    stopVideo()
  };