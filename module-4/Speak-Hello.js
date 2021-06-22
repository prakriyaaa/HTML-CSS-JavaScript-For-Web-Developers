//Speak-Hello part for module-4
(function(window) {
<<<<<<< HEAD
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));
=======
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
>>>>>>> 2d7f53a26770046c4b889737a80d5a378b9e98fe
