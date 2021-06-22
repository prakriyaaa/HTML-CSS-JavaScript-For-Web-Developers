(function(window) {
<<<<<<< HEAD
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Good Bye";
  window.byeSpeaker = byeSpeaker;
}(window));
=======
	var speakWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);
>>>>>>> 2d7f53a26770046c4b889737a80d5a378b9e98fe
