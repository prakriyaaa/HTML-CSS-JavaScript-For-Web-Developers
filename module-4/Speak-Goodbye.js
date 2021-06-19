(function(window) {
    var speakWord = "Good Bye";
    var byeSpeaker = function(name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);



  
// (function(window) {
//     var byeSpeaker = new Object();
//     var speakWord = "Good Bye";
//     byeSpeaker.speak = function speak(name) {
//         console.log(speakWord + " " + name);
//     };
//     window.byeSpeaker = byeSpeaker;
// })(window);





// // (function(){
// //     var byeSpeaker = {};

// // var speakWord = "Good Bye";
// // byeSpeaker.speak = function (name) {
// //         console.log(speakWord + " " + name);
// //     };

// // window.byeSpeaker = byeSpeaker;
// // })(window);


// // (function(window) {
// //     var speakWord = "Good Bye";
// //     var byeSpeaker = function (name) {
// //         console.log(speakWord + " " + names);
// //     };
    
// //     window.byeSpeaker = byeSpeaker;

// // })(window);