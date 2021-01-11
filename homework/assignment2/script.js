



function randomIntFromInterval(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}


function typing(p) {
$("#" + p).addClass("cursor");
let text = $("#" + p).text(),
  randInt = 0;
for (let i = 0; i < text.length; i++) {
  randInt += parseInt(randomIntFromInterval(10, 140));
  let typing = setTimeout(
    function(y) {
      $("#" + p).append(text.charAt(y));
    },
    randInt,
    i
  );
}
}

typing("text");



var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: '.center'
})
.setClassToggle('.center', '.show')
.addTo(controller);