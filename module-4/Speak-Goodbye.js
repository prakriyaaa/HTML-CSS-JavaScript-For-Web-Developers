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
>>>>>>> a6a27f3552ff3c7b5c9df75d7d40af0547b9d102
