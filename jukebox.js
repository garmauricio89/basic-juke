


var currentSong = 0
var audioEl = document.getElementsByTagName('audio');

function Thing(){
	this.play=function() {
		audioEl[currentSong].play()
	}


	this.pause=function() {
	audioEl[currentSong].pause()
}

	this.stop=function() {
	audioEl[currentSong].load()
}

	this.next=function(){
	this.stop()
	currentSong++;
	if(currentSong>1){
		currentSong=0};
	this.play()
}
}


var varButtons=new Thing()






document.addEventListener('DOMContentLoaded',function(){

	

document.getElementById('play').addEventListener('click',function(event){
	varButtons.play();
})

document.getElementById('pause').addEventListener('click',function(){
	varButtons.pause();
})

document.getElementById('stop').addEventListener('click',function(){
	varButtons.stop();
})


document.getElementById('next').addEventListener('click',function(){
	varButtons.next();
})




;})









