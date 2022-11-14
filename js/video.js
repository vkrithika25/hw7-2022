var video = document.getElementById('player1');
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var slowButton = document.getElementById('slower');
var fastButton = document.getElementById('faster');
var skipButton = document.getElementById('skip');
var mute = document.getElementById('mute');
var slider = document.getElementById('slider');
var volume = document.getElementById('volume');
var styled = document.getElementById('vintage');
var original = document.getElementById('orig');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

playButton.addEventListener("click", function() {
	video.play();
	volume.innerHTML = video.volume;
})

pauseButton.addEventListener("click", function() {
	video.pause();
})

slowButton.addEventListener("click", function() {
	var current = video.playbackRate;
	video.playbackRate = current * (9 / 10);
	console.log(video.playbackRate);
})

fastButton.addEventListener("click", function() {
	var current = video.playbackRate;
	video.playbackRate = current * (10 / 9);
	console.log(video.playbackRate);
})

skipButton.addEventListener("click", function() {
	var current = video.currentTime;
	if (current + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime);
})

mute.addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		mute.innerHTML = "Mute";
	} else {
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
})

slider.addEventListener("change", function() {
	video.volume = slider.value / 100;
	var current = slider.value;
	console.log(current)
	volume.innerHTML = (video.volume * 100) + "%";
})

original.addEventListener("click", function() {
	const list = video.classList;
	list.remove("oldSchool");
})


styled.addEventListener("click", function() {
	const list = video.classList;
	list.add("oldSchool");
})
