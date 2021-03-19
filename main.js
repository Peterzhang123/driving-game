

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
var degree = 0;
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
  if (prevKey == left) {
    degree += 90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == right) {
    degree -= 90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == down) {
    degree -= 180;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == 0) {
    degree -= 90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  }else{
    degree;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  }
}

function downArrow(prevKey) {
  if (prevKey == right) {
    degree+=90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == left) {
    degree-=90;
      img.css({
        transform: `rotate(${degree}deg)`,
        transition: transition,
      });
  } else if (prevKey == up) {
    degree+=180;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == 0) {
    degree+=90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  } else {
    degree;
    img.css({
      transition: transition,
      transform: `rotate(${degree}deg)`,
    });
  }
}

function leftArrow(prevKey) {
  if (prevKey == right) {
    degree+=180;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  } else if (prevKey == up) {
    degree-=90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  } else if (prevKey == down) {
    degree+=90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  } else if (prevKey == 0) {
    degree+=180;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    })
  } else {
    img.css({
      transition: transition,
    });
  }
}

function rightArrow(prevKey) {
  if (prevKey == left) {
    degree+=180;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == up) {
    degree+=90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == down) {
    degree -= 90;
    img.css({
      transform: `rotate(${degree}deg)`,
      transition: transition,
    });
  } else if (prevKey == right || prevKey == 0) {
    degree;
    img.css({
      transition: transition,
      transform: `rotate(${degree}deg)`,
    });
  }

}




