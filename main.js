

$(document).ready(initialized);

var vertical_move = 1;
var horizontal_move = 1;
var ePreKey = 0;
var eCurrKey = 0;
var left = 37;
var up = 38;
var right = 39;
var down = 40;
var degree = 90;
var img;
var transition = "300ms ease all";


function initialized() {
  pageDom();
  keyboardClick();
}

function pageDom() {
  var container = $(".container");
  img = $("<img>", {
    class: "img",
    src: './img/lamborghini.jpeg'
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
    leftArrow(prevKey)
  } else if (currKey == up) {
    upArrow(prevKey)
  } else if (currKey == down) {
    downArrow(prevKey)
  }

}

function upArrow(prevKey) {
  if (prevKey == left) {    
    img.css({
      transform: `rotate(${degree}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move--;
  } else if (prevKey == right) {
    img.css({
      transform: `rotate(${degree}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move++;
  } else if (prevKey == down) {
    vertical_move += 2;
    img.css({
      transform: `rotate(${degree}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
  } else if (prevKey == up || prevKey == 0) {
    vertical_move -= 2;
    img.css({
      transform: `rotate(${degree}deg)`,
      top: `${vertical_move}%`,
      transition: transition,
    })
  }
}

function downArrow(prevKey) {
  if (prevKey == right) {
    img.css({
      transform: `rotate(${degree * 3}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move++;
  } else if (prevKey == left) {
    if(img.css(`transform`) == `matrix(1, 0, 0, 1, 0, 0)` ){
      img.css({
        transform: `rotate(${-degree}deg)`,
        left: `${horizontal_move}%`,
        transition: transition,
      });
    }else{
      img.css({
        transform: `rotate(${degree * 3}deg)`,
        left: `${horizontal_move}%`,
        transition: transition,
      });
    }
    horizontal_move++;
  } else if (prevKey == up) {
    vertical_move -= 2;
    img.css({
      transform: `rotate(${degree * 3}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
  } else if (prevKey == 0) {
    vertical_move += 2;
    img.css({
      transform: `rotate(${degree * 3}deg)`,
      top: `${vertical_move}%`,
      transition: transition,
    });
  }else{
    vertical_move += 2;
    img.css({
      top: `${vertical_move}%`,
      transition: transition,
    });
  }
}

function leftArrow(prevKey) {
  if (prevKey == right) {
    img.css({
      transform: `rotate(0deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move--;
  } else if (prevKey == up) {
    img.css({
      transform: `rotate(0deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    vertical_move -= 2;
  } else if (prevKey == down) {
    img.css({
      transform: `rotate(${degree * 4}deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    vertical_move += 2;
    } else if (prevKey == 0) {
    img.css({
      transform: `rotate(0deg)`,
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move--;
  }else{
    img.css({
      left: `${horizontal_move}%`,
      transition: transition,
    });
    horizontal_move--;
  }
}

function rightArrow(prevKey) {
  if (prevKey == left) {
    img.css({
      left: `${horizontal_move}%`,
      transform: `rotate(${degree * 2}deg)`,
      transition: transition,
    });
    horizontal_move++;
  } else if (prevKey == up) {
    img.css({
      left: `${horizontal_move}%`,
      transform: `rotate(${degree * 2}deg)`,
      transition: transition,
    });
    vertical_move -= 2;
  } else if (prevKey == down) {
    img.css({
      left: `${horizontal_move}%`,
      transform: `rotate(${degree * 2}deg)`,
      transition: transition,
    });
    vertical_move+=2;
  } else if (prevKey == right || prevKey == 0) {
    horizontal_move++;
    img.css({
      left: `${horizontal_move}%`,
      transition: transition,
      transform: `rotate(${degree * 2}deg)`,
    });
  }

}




