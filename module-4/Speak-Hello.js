<<<<<<< HEAD
(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));
=======

(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
>>>>>>> a6a27f3552ff3c7b5c9df75d7d40af0547b9d102
