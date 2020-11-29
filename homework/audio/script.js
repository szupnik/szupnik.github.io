
var audio = $("#bird-sound")[0];
      
$("#bird-img").mouseenter(function() {
  duck.currentTime = 0;
  duck.play();
});
    $("#bird-img").mouseleave(function() {
  duck.pause();
});
