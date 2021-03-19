

$(document).ready(initialized);

function initialized() {
  pageDom();
  keyboardClick();
}

var ePreKey = 0;
var eCurrKey = 0;
var left = 37;
var up = 38;
var right = 39;
var down = 40;
var degree = 90;
var img;
var transition = "300ms ease all";

function pageDom() {
  var container = $(".container");
  img = $("<img>", {
    class: "img",
    src: './img/car.jpeg'
  });
  container.append(img);
  return container;
}


function keyboardClick() {
  document.onkeydown = function (e) {
    eCurrKey = e.which;
    lastKeyDown(ePreKey, eCurrKey);
    ePreKey = eCurrKey;
  }
}

var lastKeyDown = function (prevKey, currKey) {
  if (currKey == right) {
    rightArrow(prevKey);
  } else if (currKey == left) {
    leftArrow(prevKey);
  } else if (currKey == up) {
    upArrow(prevKey);
  } else if (currKey == down) {
    downArrow(prevKey);
  }
}

function upArrow(prevKey) {
      img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
}

function downArrow(prevKey) {
    img.css({
      transform: `rotate(${degree * 3}deg)`,
      transition: transition,
    });
}

function leftArrow(prevKey) {
    img.css({
      transform: `rotate(0deg)`,
      transition: transition,
    });   
}

function rightArrow(prevKey) {
    img.css({
      transition: transition,
      transform: `rotate(${degree * 2}deg)`,
    });

}

